import { Request, Response } from 'express'
const { guest } = require("../db/models/index");

class NoteGalleryController {
   
   getAll = async (req: Request, res: Response): Promise<Response> => {
      try {
         
         //query get gallery data to result attributes name and note
         const noteGallery = await guest.findAll({
            attributes: ['name', 'note']
         });

         //return result
         return res.status(201).json({
            message: 'Guest form successfully created',
            data: noteGallery
         });
      } catch (error) {
         res.status(500).json({
            error: error,
            message: 'Something went wrong'
         });
      }
   } 


}

export default new  NoteGalleryController();