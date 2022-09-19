import { apiHandler } from '../../../helpers/api';
import { query } from "../../../lib/db";

export default apiHandler(handler);

function handler(req: any, res: any) {
    const getUsers = async() =>  {
        if(req.method === 'GET'){
            const querySql ="SELECT * FROM users";
            const data = await query({ querys: querySql, values: [] });
            res.status(200).json(data)
        }
    }
    switch (req.method) {
        case 'GET':
            return getUsers();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

  
}
