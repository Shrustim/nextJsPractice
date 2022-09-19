import jwt from 'jsonwebtoken';
import { query } from "../../../lib/db";
import { apiHandler } from '../../../helpers/api';
import {JWTSecret} from "../../../constants"
export default apiHandler(handler);

function handler(req: any, res: any) {
   

    const authenticate = async() => {
        const { email, password } = req.body;
        const isValidate = UserValidation(req.body);
        if(isValidate === true){
                // const user = users.find((u: any) => u.username === username && u.password === password);
                const querySql ="SELECT id FROM users WHERE email='"+email+"' AND password='"+password+"' AND isActive = 1";
                const data:any = await query({ querys: querySql, values: [] });
                if (data.length == 0) throw 'Email or password is incorrect';
            
                // create a jwt token that is valid for 7 days
                const token = jwt.sign({ sub: data[0].id }, JWTSecret, { expiresIn: '7d' });
            
                // return basic user details and token
                return res.status(200).json({
                token
                });
        }else{
                throw isValidate;
        }
    }
    const UserValidation = (data: any)=>{
        const { email, password } = req.body;
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if(email && regex.test(email) && password && password.length >= 6){
            return true;
        }else{
            if(!email || !regex.test(email)){
                return "Invalid email.";
            }
            if(!password){
                return "Invalid password.";
            }
            if(password.length <= 5){
                return "Password must have more than 6 characters.";
            }
           
        }
    }
    switch (req.method) {
        case 'POST':
            return authenticate();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
