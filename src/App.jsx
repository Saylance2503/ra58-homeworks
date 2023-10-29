import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import ViewEditPost from "./components/ViewEditPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posts/new" element={<CreatePost />} />
        <Route path="/posts/:id" element={<ViewEditPost />} />
        <Route path="/" element={<PostList />} />
      </Routes>
    </Router>
  );
}

export default App;
