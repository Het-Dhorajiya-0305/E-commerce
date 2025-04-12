import multer from "multer";

// You can customize this storage config as needed
const storage = multer.memoryStorage(); // or diskStorage if saving to disk

export const upload = multer({ storage });
