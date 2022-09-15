
import type { NextApiRequest, NextApiResponse } from 'next'

export default function getVehicles(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method !== 'GET'){
        res.status(500).json({ message: 'Sorry!!! Invalid request.' })
    }
  res.status(200).json({ name: 'Shrushti',method: req.method })
}


