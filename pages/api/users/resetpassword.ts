import jwt from 'jsonwebtoken';
import { query } from "../../../lib/db";
import { apiHandler } from '../../../helpers/api';
import {BaseURL,EmailAddress,EmailPassword} from "../../../constants"
import { SMTPClient } from 'emailjs';
export default apiHandler(handler);

function handler(req: any, res: any) {
   

    const ResetPassword = async() => {
        const { email } = req.body;
        const isValidate = BodyValidation(req.body);
        if(isValidate === true){
            return res.status(200).json({});
            
                
        }else{
                throw isValidate;
        }
    }
    const BodyValidation = (data: any)=>{
        const { email } = req.body;
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if(email && regex.test(email) ){
            return true;
        }else{
            return "Invalid email.";
        }
    }
    switch (req.method) {
        case 'POST':
            return ResetPassword();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
