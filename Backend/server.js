import app from "./src/app.js"; // Use full path with `.js` extension
import dotenv from "dotenv";

dotenv.config();

app.listen(3000, () => {
  console.log("Server is running on port no. 3000");
});
