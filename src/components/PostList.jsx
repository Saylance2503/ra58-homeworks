import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:7070/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => {
                console.error("Ошибка при загрузке постов: ", error);
            });
    }, []);

    return (
        <div>
            <h1>Список постов</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.content}</Link>
                </div>
            ))}
            <Link to="/posts/new">Создать пост</Link>
        </div>
    );
}

export default PostList;
