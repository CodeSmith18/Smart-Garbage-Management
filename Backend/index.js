const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
let url =
	"mongodb+srv://ritikraj1875:Z7VwN1Ypj3eYUKW9@cluster0.y5obe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
	console.log("Database Connected");
});
mongoose.connection.on("error", (err) => {
	console.log("Database connection error:", err);
});

// Models
const Users = mongoose.model("Users", {
	username: String,
	userId: String,
	firstName: String,
	lastName: String,
	dob: Date,
	gender: String,
	location: String,
	phoneNumber: String,
	password: String,
	email: String,
});
const Workers = mongoose.model("Workers", {
	username: String,
	userId: String,
	firstName: String,
	lastName: String,
	dob: Date,
	gender: String,
	location: String,
	phoneNumber: String,

	password: String,
	email: String,
});

// Routes
app.get("/", (req, res) => {
	res.send("Hello World");
});

app.post("/signup_user", (req, res) => {
	console.log(req.body);
	const { username, password, email } = req.body;

	const user = new Users({
		username,
		password,
		email,
	});

	user
		.save()
		.then(() => {
			res.send({ message: "Save Success" });
		})
		.catch(() => {
			res.send({ message: "Server Error" });
		});
});
app.post("/profile_user", (req, res) => {
	console.log("Updating user profile:", req.body);
	const {
		userId,
		firstName,
		lastName,
		dob,
		gender,
		location,
		phoneNumber,
		email,
	} = req.body;

	Users.findOneAndUpdate(
		{ userId },
		{
			firstName,
			lastName,
			dob,
			gender,
			location,
			phoneNumber,
			email,
		},
		{ new: true, upsert: true } // Upsert to create if doesn't exist
	)
		.then(() => {
			res.status(200).send({ message: "Profile updated successfully" });
		})
		.catch((error) => {
			console.error("Error updating profile:", error);
			res.status(500).send({ message: "Server Error" });
		});
});
// fetch profile user

app.get("/profile_user/:userId", (req, res) => {
	const { userId } = req.params;
	Users.findOne({ userId })
		.then((user) => {
			if (user) {
				res.json(user);
			} else {
				res.status(404).send({ message: "User not found" });
			}
		})
		.catch((error) => {
			console.error("Error fetching user profile:", error);
			res.status(500).send({ message: "Server Error" });
		});
});
// Sign up worker
app.post("/signup_worker", (req, res) => {
	console.log("Signing up worker:", req.body);
	const { username, password, email } = req.body;

	// Ideally, hash the password before saving it
	const worker = new Workers({
		username,
		password, // Make sure to hash this in a real app
		email,
	});

	worker
		.save()
		.then(() => {
			res.status(201).send({ message: "Worker saved successfully" });
		})
		.catch((error) => {
			console.error("Error saving worker:", error);
			res.status(500).send({ message: "Server Error" });
		});
});

// Profile update for worker
app.post("/profile_worker", (req, res) => {
	console.log("Updating worker profile:", req.body);
	const {
		userId,
		firstName,
		lastName,
		dob,
		gender,
		location,
		phoneNumber,
		email,
	} = req.body;

	Workers.findOneAndUpdate(
		{ userId },
		{
			firstName,
			lastName,
			dob,
			gender,
			location,
			phoneNumber,
			email,
		},
		{ new: true, upsert: true } // Upsert to create if doesn't exist
	)
		.then(() => {
			console.log("Updated Profile Data:");
			res.status(200).send({ message: "Profile updated successfully" });
		})
		.catch((error) => {
			console.error("Error updating worker profile:", error);
			res.status(500).send({ message: "Server Error" });
		});
});

app.post("/login_user", (req, res) => {
	console.log(req.body);
	const username = req.body.username;
	const password = req.body.password;

	Users.findOne({ username: username }).then((result) => {
		console.log(result, "User Data");
		if (!result) {
			res.send({ message: "User Not found" });
		} else {
			if (result.password === password) {
				const token = jwt.sign(
					{
						data: result,
					},
					"MYKEY",
					{ expiresIn: "1h" }
				);
				res.send({ message: "User found", token: token, userId: result._id });
			} else {
				res.send({ message: "Incorrect Password" });
			}
		}
	});
});

app.post("/login_worker", (req, res) => {
	console.log(req.body);
	const { username, password } = req.body;

	Workers.findOne({ username }).then((result) => {
		console.log(result, "Worker Data");
		if (!result) {
			res.send({ message: "User Not found" });
		} else {
			if (result.password === password) {
				const token = jwt.sign(
					{
						data: result,
					},
					"MYKEY",
					{ expiresIn: "1h" }
				);
				res.send({ message: "User found", token: token, userId: result._id });
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
