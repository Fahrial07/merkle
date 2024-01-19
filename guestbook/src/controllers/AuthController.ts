import { Request, Response } from 'express'
import Authentication from '../utils/Authentication'
const { user } = require("../db/models/index");


class AuthController {
   
   register = async (req: Request, res: Response): Promise<Response> => {
      try {
         let { username, password } = req.body;
         //hash password
         const hashPassword: string = await Authentication.hash(password);
         
         //query check data username to unique
         let userCheck = await user.findOne({ where: { username: username } })

         //if result true return error notice
         if (userCheck) {
            return res.status(400).json({
               message: 'Username already exist'
            });
         }

         //if false insert data
         const createUser = await user.create({
            username: username,
            password: hashPassword
         });

         //and return result
         return res.status(201).json({
            message: 'User created',
            data: createUser
         });


      } catch (error) {
         console.log(error)
         res.status(500).json({
            error: error,
            message: 'Something went wrong'
         });
      }
   } 

   login = async (req: Request, res: Response): Promise<Response> => {
      
      try {
         let { username, password } = req.body;

         //find user by username in the database
         const userData = await user.findOne({ where: { username } });

         if (!userData) {
            return res.status(400).json({
               message: 'Username or password wrong'
            });
         }

         //compare password
         const isMatch = await Authentication.passwordCompare(password, userData.password);

         if (isMatch) {
            //create token
            let token = await Authentication.generateToken(userData.id, userData.username, userData.password);
   
            //return result
            return res.status(200).json({
               message: 'Login success',
               data: userData,
               token: token
            });
         } else {
            return res.status(400).json({
               message: 'Username or password wrong'
            });
         }

      } catch (error) {
         console.log(error)
         res.status(500).json({
            error: error,
            message: 'Something went wrong'
         });
      }

   } 

}

export default new  AuthController();