import { Request, Response } from 'express'
//import interface
import IController from './ControllerInterface'

class UserController implements IController {
   
   index(req: Request, res: Response): Response {
      return res.send("End Point");
   }
   
   create(req: Request, res: Response): Response {
      return res.send("End Point");
   }

   show(req: Request, res: Response): Response {
      return res.send("End Point");
   }

   update(req: Request, res: Response): Response {
      return res.send("End Point");
   }

   delete(req: Request, res: Response): Response {
      return res.send("End Point");
   }  

}

export default new UserController();