import { Router } from "express";
import { home } from "./home.js";
import { upload } from "./multer.js";
import { uploads } from "./upload.js";

const router = Router();

router.get("/", home);

router.post("/upload", upload.single("myFile"), uploads);

export default router;
