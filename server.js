import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const App = express();
const PORT = process.env.PORT || 3010;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//middleware
App.use(express.static(path.join(__dirname,'dist')));

//get route
App.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist','index.html'))
});
//Start the app on port 3000
App.listen(PORT,()=>{
 console.log(`listening on port:${PORT}`)
})