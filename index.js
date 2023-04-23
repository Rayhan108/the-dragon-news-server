const express =require('express');
const cors =require('cors');
const catagories = require('./data/catagories.json');
const app =express();
const port =process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('the dragon news');
})

app.use(cors());

app.get('/catagories',(req,res)=>{
    res.send(catagories)
})
app.listen(port,()=>{
    console.log(`dragon api is runing on port:${port}`);
})
