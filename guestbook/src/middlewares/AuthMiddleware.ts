import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

export const auth = (req: Request, res: Response, next: NextFunction): any => {
   if (!req.headers.authorization) {
      return res.status(401).json({
         message: 'Unauthorized'
      });
   }
   let secretKey: string = process.env.JWT_SECRET_KEY || "rahasia";
   let token = req.headers.authorization.split(" ")[1];

   try {
      const credential: string | object = jwt.verify(token, secretKey);

      if (!credential) {
         return res.status(401).json({
            message: 'Unauthorized or Token Invalid'
         });
      } else {
         next();
      }

   } catch (error) {
      return res.status(404).json({
            message: error
         });
   }
}
