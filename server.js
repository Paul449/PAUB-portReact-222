const express = require('express');
const PATH = require('path');
const App = express();
const PORT = process.env.PORT || 3000;
//middleware
App.use(express.static(PATH.join(__dirname,'dist')));
//get route
App.get('*',(req,res)=>{
    res.sendFile(PATH.join(__dirname,'dist','index.html'))
});
//Start the app on port 3000
App.listen(PORT,()=>{
 console.log(`listening on port:${PORT}`)
})