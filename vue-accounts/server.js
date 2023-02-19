import express from "express";
import cors from "cors";
const app = express();
const PORT = 5174;
app.use(cors());
app.use(express.static("dist"));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
export default {};
