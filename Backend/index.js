const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
let url = 'mongodb+srv://ritikraj1875:Z7VwN1Ypj3eYUKW9@cluster0.y5obe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Database Connected');
});
mongoose.connection.on('error', (err) => {
    console.log('Database connection error:', err);
});

// Models
const Users = mongoose.model('Users', {
    username: String,
    password: String,
    email: String,
});
const Workers = mongoose.model('Workers', {
    username: String,
    password: String,
    email: String,
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/signup_user', (req, res) => {
    console.log(req.body);
    const { username, password, email } = req.body;

    const user = new Users({
        username,
        password,
        email
    });

    user.save()
        .then(() => {
            res.send({ message: 'Save Success' });
        })
        .catch(() => {
            res.send({ message: 'Server Error' });
        });
});

app.post('/signup_worker', (req, res) => {
    console.log(req.body);
    const { username, password, email } = req.body;

    const worker = new Workers({
        username,
        password,
        email
    });

    worker.save()
        .then(() => {
            res.send({ message: 'Save Success' });
        })
        .catch(() => {
            res.send({ message: 'Server Error' });
        });
});

app.post('/login_user', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
 
    Users.findOne({ username:username })
        .then((result) => {
            console.log(result, "User Data");
            if (!result) {
                res.send({ message: "User Not found" });
            } else {
                if (result.password === password) {
                    const token = jwt.sign({
                        data:result
                    },'MYKEY',{expiresIn:'1h'});
                    res.send({ message: "User found",token:token,userId:result._id });
                } else {
                    res.send({ message: "Incorrect Password" });
                }
            }
        });
});

app.post('/login_worker', (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    Workers.findOne({ username })
        .then((result) => {
            console.log(result, "Worker Data");
            if (!result) {
                res.send({ message: "User Not found" });
            } else {
                if (result.password === password) {
                    const token = jwt.sign({
                        data:result
                    },'MYKEY',{expiresIn:'1h'});
                    res.send({ message: "User found",token:token,userId:result._id });
                } else {
                    res.send({ message: "Incorrect Password" });
                }
            }
        });
});

// Start the server
app.listen(port, () => {
    console.log(`App is Listening on the port ${port}`);
});