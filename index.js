import express from "express";
import routes from "./router.js";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",routes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
