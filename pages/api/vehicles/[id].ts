
import type { NextApiRequest, NextApiResponse } from 'next'

export default function getVehiclesById(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method !== 'GET'){
        res.status(500).json({ message: 'Sorry!!! Invalid request.' })
    }
  res.status(200).json({ ById: req.query.id,method: req.method })
}

