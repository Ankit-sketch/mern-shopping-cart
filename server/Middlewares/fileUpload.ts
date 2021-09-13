import multer from "multer";

import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) =>  cb(null, 'server/uploads/'),
    filename : (req, file, cb) => {
        const uniquenName:string = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniquenName);
    }    
})

const handlemultiPartData = multer ({
    storage, 
    limits : {
        fileSize : 1000000 * 5  //5MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) { 
           // upload only png and jpg format
           return cb(new Error('Please upload a Image'))
         }
       cb(null, true)
    }
}).array('images', 4)

export default handlemultiPartData;