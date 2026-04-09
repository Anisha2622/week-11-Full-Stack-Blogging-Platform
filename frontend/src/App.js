import axios from "axios";
import { useState } from "react";

function App() {

  const [blogs, setBlogs] = useState([]);

  // login
  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: "test@gmail.com",
        password: "1234"
      });

      alert(res.data.token);

      localStorage.setItem("token", res.data.token);
    } catch {
      alert("Login failed");
    }
  };

  // create blog
  const createBlog = async () => {
    await axios.post("http://localhost:5000/api/blog", {
      title: "My First Blog",
      content: "Hello Anisha!"
    });

    alert("Blog Created");
  };

  // get blogs
  const getBlogs = async () => {
    const res = await axios.get("http://localhost:5000/api/blog");
    setBlogs(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog App</h1>

      <button onClick={login}>Login</button>
      <br /><br />

      <button onClick={createBlog}>Create Blog</button>
      <br /><br />

      <button onClick={getBlogs}>Show Blogs</button>

      <h2>Blogs:</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;