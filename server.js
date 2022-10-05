require('dotenv').config();
const Express = require('express');
const cors = require('cors');
const app = Express();
const PORT = process.env.PORT || 3005;
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));

//controllers
const {getServerList} = require('./controller/dbhserver');


console.clear();

app.get('/servers',async(req,res)=>{
   const kd =await  getServerList();
    res.json(kd);
});

app.post('/start',(req,res)=>{

});
app.post('/stop',(req,res)=>{

});
app.post('/stat/:id',(req,res)=>{

});


app.listen(PORT ,()=>{
    console.log(`app is running at PORT ${PORT}`);
})