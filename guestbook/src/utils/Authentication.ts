import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class Authentication {
   public static hash = (password: string): Promise<string> => {
      return new Promise((resolve, reject) => {
         bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
               reject(err)
            }
            resolve(hash)
         })
      })
   }

   public static passwordCompare = (text: string, encryptedText: string): Promise<boolean> => {
      return new Promise((resolve, reject) => {
         bcrypt.compare(text, encryptedText, (err, result) => {
            if (err) {
               reject(err)
            }
            resolve(result)
         })
      })
   }

   public static generateToken = (id: number, username: string, password: string): any => {
      const secretKey: string = process.env.JWT_SECRET_KEY || "rahasia";

      const token: string = jwt.sign({ id, username, password }, secretKey);

      return token;
   }

}

export default Authentication;