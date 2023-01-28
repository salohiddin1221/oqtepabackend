
const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cloudinary = require('cloudinary')
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const multer = require('multer')

dotenv.config();

const cloud = cloudinary.v2;
const router = express.Router();

cloud.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDAPISECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloud,
  params: {
    folder: 'oqtepa', // any desirable folder name for your Media Library (uploaded images will be in this folder)
    public_id: (req, file) =>
      `${file.originalname.split('.')[0]}`,
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(null, false);
  }
}

// const upload = multer({
//   storage,
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// });

// router.post('/', upload.single('image'), (req, res) => {
//   res.send(req.file.path);
// });

module.exports = {storage , checkFileType};