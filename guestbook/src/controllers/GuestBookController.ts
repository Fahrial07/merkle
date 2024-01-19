import { Request, Response } from 'express'
const { guest } = require("../db/models/index");

class GuestBookController {
   
   create = async (req: Request, res: Response): Promise<Response> => {
      try {
         let { name, address, phone, note } = req.body;

         if (name == "") {
            return res.status(400).json({
               message: 'Name is required'
            });
         }

         if (address == "") {
            return res.status(400).json({
               message: 'Address is required'
            });
         }

         if (phone == "") {
            return res.status(400).json({
               message: 'Phone is required'
            });
         }

         if (note == "") {
            return res.status(400).json({
               message: 'Note is required'
            });
         }

         const checkName = await guest.findOne({ where: { name: name } });
         if (checkName) {
            return res.status(400).json({
               message: 'Name already exist'
            });
         }

         const checkPhone = await guest.findOne({ where: { phone: phone } });
         if (checkPhone) {
            return res.status(400).json({
               message: 'Phone already exist'
            });
         }

         const createGuest = await guest.create({
            name: name,
            address: address,
            phone: phone,
            note: note
         });

         return res.status(201).json({
            message: 'Guest form successfully created',
            data: createGuest
         });


      } catch (error) {
         res.status(500).json({
            error: error,
            message: 'Something went wrong'
         });
      }
   } 


}

export default new  GuestBookController();