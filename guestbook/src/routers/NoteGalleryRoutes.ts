import BaseRoutes from './BaseRouter';
import NoteGalleryController from '../controllers/NoteGalleryController';
import { auth } from '../middlewares/AuthMiddleware';

class NoteGalleryRoutes extends BaseRoutes {
   public routes(): void { 
        this.router.get("/", auth, NoteGalleryController.getAll);
   }
      
}

//exports
export default new NoteGalleryRoutes().router;