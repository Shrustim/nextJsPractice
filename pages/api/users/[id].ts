import { apiHandler } from '../../../helpers/api';
import { query } from "../../../lib/db";
import type { NextApiRequest, NextApiResponse } from 'next'

export default apiHandler(handler);

function handler(req: NextApiRequest,
    res: NextApiResponse) {
    const getUserById = async() =>  {
        if(req.method === 'GET'){
            const querySql ="SELECT id,email,firstName,lastName,role FROM users where id ='"+req.query.id+"' ";
            const data = await query({ querys: querySql, values: [] });
            res.status(200).json(data)
        }
    }
    switch (req.method) {
        case 'GET':
            return getUserById();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

  
}
