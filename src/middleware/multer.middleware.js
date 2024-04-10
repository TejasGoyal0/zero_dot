import multer from 'multer';

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // File name will be timestamp + original file name
  }
});

const upload = multer({ storage: storage });

// Middleware to accept single file upload
const uploadSingle = upload.single('file');

// Middleware to accept multiple files upload
const uploadMultiple = upload.array('files', 5); // Maximum 5 files c

export { uploadSingle, uploadMultiple };
