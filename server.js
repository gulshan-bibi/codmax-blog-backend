const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let users = [];
let blogs = [
  { id: 1, title: "My First Blog", content: "This is my first blog post" }
];

app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });
  res.json({ message: "User Registered Successfully" });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if(user) res.json({ message: "Login Success" });
  else res.status(401).json({ message: "Invalid" });
});

app.post('/api/blogs', (req, res) => {
  const { title, content } = req.body;
  const newBlog = { id: blogs.length + 1, title, content };
  blogs.push(newBlog);
  res.json({ message: "Blog Created", newBlog });
});

app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});

app.get('/', (req,res) => res.send("Codomax Module 2 Backend Running"));
app.listen(5000, () => console.log("Server running on http://localhost:5000"));