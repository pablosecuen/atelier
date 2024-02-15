import { Request } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: Function) {
    cb(null, 'uploads/'); // Directorio donde se guardarán los archivos
  },
  filename: function (req: Request, file: Express.Multer.File, cb: Function) {
    cb(null, Date.now() + '-' + file.originalname); // Nombre del archivo
  }
});

const upload = multer({ storage: storage });

export default upload;
