import { Router } from 'express'
import IRouter from './RouteInterface';

abstract class BaseRoutes implements IRouter {

   //property router type router
   public router: Router;

   //constructor
   constructor() {
      this.router = Router();
      this.routes();
   }

   abstract routes(): void;
      
}

export default BaseRoutes;