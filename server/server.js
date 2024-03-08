import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("<h1 style='display:inline;margin:0;padding:0;'>hey,</h1><h3 style='display:inline;margin:0;padding:15px;'>mern developer</h3>");
});

// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
