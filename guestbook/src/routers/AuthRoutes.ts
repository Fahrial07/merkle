import BaseRoutes from './BaseRouter';
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRoutes {
   public routes(): void { 
        this.router.post("/register", AuthController.register);
        this.router.post("/login", AuthController.login);
   }
      
}

//exports
export default new AuthRoutes().router;