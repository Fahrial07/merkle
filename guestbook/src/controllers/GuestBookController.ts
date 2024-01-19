import { Request, Response } from 'express'
const { guest } = require("../db/models/index");

class GuestBookController {
   
   create = async (req: Request, res: Response): Promise<Response> => {
      try {
         let { name, address, phone, note } = req.body;

         //valudate check empty data
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

         //validate check name to unique
         const checkName = await guest.findOne({ where: { name: name } });
         //if true return error notice
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

         //if fales all validate store data to database
         const createGuest = await guest.create({
            name: name,
            address: address,
            phone: phone,
            note: note
         });

         //return result data
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