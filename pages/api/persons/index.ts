
import type { NextApiRequest, NextApiResponse } from 'next'

export default function getPersons(
  req: NextApiRequest,
  res: NextApiResponse
) {

    if(req.method === 'GET'){
        res.status(200).json([
            {
                id: 1,
                name: "Shrushti"
            },
            {
                id: 2,
                name: "Snehal"
            },
            {
                id: 3,
                name: "Akki"
            }
          ])
    }
    if(req.method === 'POST'){
        res.status(200).json({ message: 'Person Post Method',body:req.body })
    }
    if(req.method === 'PATCH'){
        res.status(200).json({ message: 'Person PATCH Method' })
    }
    if(req.method === 'PUT'){
        res.status(200).json({ message: 'Person PUT Method' })
    }
    if(req.method === 'DELETE'){
        res.status(200).json({ message: 'Person DELETE Method' })
    }


    // if(req.method !== 'GET'){
    //     res.status(500).json({ message: 'Sorry!!! Invalid request.' })
    // }
 
}


