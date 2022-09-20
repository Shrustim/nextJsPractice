import jwt from 'jsonwebtoken';
import { query } from "../../../lib/db";
import { apiHandler } from '../../../helpers/api';
import {JWTSecret} from "../../../constants"

export default apiHandler(handler);

function handler(req: any, res: any) {
   

    const signup = async() => {
        const { email, password,firstName,lastName } = req.body;
        const isValidate = UserValidation(req.body);
        if(isValidate === true){
            const querySqlCheck ="SELECT id FROM users WHERE email='"+email+"'";
            const dataCheck:any = await query({ querys: querySqlCheck, values: [] });
            if (dataCheck.length == 0) {
                const today = new Date();
                  // const user = users.find((u: any) => u.username === username && u.password === password);
                const querySql ='INSERT INTO users (email, password, firstName, lastName, createdDttm,lastLoggedDttm)'+
                'VALUES ("'+email+'", "'+password+'", "'+firstName+'", "'+lastName+'","'+ today.getTime()+'","'+ today.getTime()+'")';
                const data:any = await query({ querys: querySql, values: [] });
                
                if (!data.insertId) throw 'Information is incorrect';

                // create a jwt token that is valid for 7 days
                const token = jwt.sign({ sub: data.insertId },JWTSecret, { expiresIn: '7d' });

                // return  token
                return res.status(200).json({
                    token
                });
            }
            else{
                throw 'Email is already exits.'
            };
        }else{
            throw isValidate;
        }
      
    }
    const UserValidation = (data: any)=>{
        const { email, password,firstName,lastName } = req.body;
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if(email && regex.test(email) && password && password.length >= 6 && firstName && lastName ){
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
            if(!firstName){
                return "Invalid first name.";
            }
            if(!lastName){
                return "Invalid last name.";
            }
        }
    }
    switch (req.method) {
        case 'POST':
            return signup();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
