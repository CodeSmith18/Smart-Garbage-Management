const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require('cors');
const jwt =require('jsonwebtoken');


let url = 'mongodb+srv://ritikraj1875:Z7VwN1Ypj3eYUKW9@cluster0.y5obe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
      console.log('Database Connected');
});

const Users = mongoose.model('Users',{
        username : String,
        password:String,
        email:String,
});
const Workers = mongoose.model('Workers',{
      username : String,
      password:String,
      email:String,
});
app.get('/',(req,res)=>{
      res.send('Hello World');
});
app.post('/singup_user',(req,res)=>{
      console.log(req.body);
      const username = req.body.username;
      const password = req.body.password;
      const email = req.body.email;

      const user  = new Users({
            username:username,
            password:password,
            email:email
      });

      user.save()
      .then(()=>{
            res.send({message : 'Save Success'});
      })
      .catch(()=>{
            res.send({message:'Server Error'});
      })

})
app.post('/singup_worker',(req,res)=>{
      console.log(req.body);
      const username = req.body.username;
      const password = req.body.password;
      const email = req.body.email;

      const worker  = new Workers({
            username:username,
            password:password,
            email:email
      });

      worker.save()
      .then(()=>{
            res.send({message : 'Save Success'});
      })
      .catch(()=>{
            res.send({message:'Server Error'});
      })

})
app.post('login_user',(req,res)=>{
      console.log(req.body);
      const username = req.body.username;
      const password = req.body.password;

      Users.findOne({username:username})
      .then((result)=>{
            console.log(result,"User Data");
            if(!result){
                  res.send({message:"User Not found"});
            }
            else{
                  if(result.password == password){
                       res.send({message:"user found"});
                  }
                  else{
                        res.send({message:"Incorrect Password"});
                  }
            }
      });

});
app.post('login_Worker',(req,res)=>{
      console.log(req.body);
      const username = req.body.username;
      const password = req.body.password;

      Workers.findOne({username:username})
      .then((result)=>{
            console.log(result,"User Data");
            if(!result){
                  res.send({message:"User Not found"});
            }
            else{
                  if(result.password == password){
                       res.send({message:"user found"});
                  }
                  else{
                        res.send({message:"Incorrect Password"});
                  }
            }
      });

});
app.listen(port,()=>{
      console.log(`App is Listening on the port ${port}`);
});