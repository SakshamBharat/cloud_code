import multer from "multer";
import crypto from "crypto";
import path from "path";

const storage = multer.memoryStorage();


const upload = multer({
  storage,

  limits: {
    fileSize: 10000000, // 10 MB
  },
});

export { upload };
