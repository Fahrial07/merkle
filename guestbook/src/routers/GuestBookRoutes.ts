import BaseRoutes from './BaseRouter';
import GuestBookController from '../controllers/GuestBookController';

class GuestBookRoutes extends BaseRoutes {
   public routes(): void { 
        this.router.post("/", GuestBookController.create);
   }
      
}

//exports
export default new GuestBookRoutes().router;