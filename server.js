const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/blogs", blogRoutes);

app.get("/", (req,res)=> res.sendFile(path.join(__dirname, 'public', 'index.html')));

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected - Module 3"))
.catch(e=> console.log(e));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));