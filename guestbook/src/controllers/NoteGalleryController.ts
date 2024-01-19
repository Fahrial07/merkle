import { Request, Response } from 'express'
const { guest } = require("../db/models/index");

class NoteGalleryController {
   
   create = async (req: Request, res: Response): Promise<Response> => {
      try {
         
         const noteGallery = await guest.findAll();


      } catch (error) {
         res.status(500).json({
            error: error,
            message: 'Something went wrong'
         });
      }
   } 


}

export default new  NoteGalleryController();