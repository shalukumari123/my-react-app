// Mini Project 1: Blog UI
// 👉 Build a simple blog:
// Show a list of posts (title + content).
// Add new post using a controlled form.
// Use .map() with unique keys.
// Store posts in state.
import React,{useState} from 'react'

const BlogUI = () => {
    // Step 1: State for posts
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is my first blog post!" },
    { id: 2, title: "Second Post", content: "Learning React is fun" },
  ]);

  // Step 2: State for controlled form
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Step 3: Handle form submit
  const handleAddPost = (e) => {
    e.preventDefault();
    if (title && content) {
      const newPost = {
        id: Date.now(), // unique key
        title,
        content,
      };
      setPosts([...posts, newPost]);
      setTitle("");   // clear form
      setContent("");
    }
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Blog</h1>

      {/* Form to Add Post */}
      <form onSubmit={handleAddPost} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px" }}>Add Post</button>
      </form>

      {/* Display Posts */}
      <div>
        {posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BlogUI
