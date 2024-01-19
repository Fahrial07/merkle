import BaseRoutes from './BaseRouter';
import UserController from '../controllers/UserController';

//UserRoutes inplement IRouter
class UserRoutes extends BaseRoutes {
   public routes(): void {
      this.router.get("/", UserController.index);
      this.router.post("/", UserController.create);
      this.router.get("/:id", UserController.show);
      this.router.put("/:id", UserController.update);
      this.router.delete("/:id", UserController.delete);
   }
}

//exports
export default new UserRoutes().router;