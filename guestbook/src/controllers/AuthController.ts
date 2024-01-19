import { Request, Response } from 'express'
const { user } = require("../db/models/index");

class AuthController {
   
   register = async (req: Request, res: Response): Promise<Response> => {
      try {
         let { username, password } = req.body;

         let userCheck = await user.findOne({ where: { username: username } })

         if (userCheck) {
            return res.status(400).json({
               message: 'Username already exist'
            });
         }

         

         const createUser = await user.create({
            username: username,
            password: password
         });

         return res.status(201).json({
            message: 'User created',
            data: createUser
         });


      } catch (error) {
         res.status(500).json({
            error: error,
            message: 'Something went wrong'
         });
      }
   } 

   login = async (req: Request, res: Response): Promise<Response> => {
      
   } 

}

export default new  AuthController();