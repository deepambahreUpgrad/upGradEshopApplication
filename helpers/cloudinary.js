require('dotenv').config()
const cloudinary = require('cloudinary').v2


cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_KEY,
    api_secret : process.env.CLOUDINARY_SECRET
})

// cloudinary.CloudinaryStorage({
//     params: {
//         folder: 'musicApp',
//         allowedFormats: ['jpeg', 'png', 'jpg', 'mp3', 'wmv'],
//         resource_type: "raw",
//         use_filename: true, 
//         unique_filename: false,
//     },
//     use_filename: true, 
//     unique_filename: false
// });

module.exports = cloudinary