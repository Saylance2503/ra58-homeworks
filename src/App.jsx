import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import ViewEditPost from "./components/ViewEditPost";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/posts/new" component={CreatePost} />
        <Route path="/posts/:id" component={ViewEditPost} />
        <Route path="/" component={PostList} />
      </Switch>
    </Router>
  );
}

export default App;
