import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreatePost() {
    const [content, setContent] = useState("");
    const history = useHistory();

    const handleCreatePost = () => {
        fetch("http://localhost:7070/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content }),
        })
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                console.error("Ошибка при создании поста: ", error);
            });
    };

    return (
        <div>
            <h1>Создать пост</h1>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="4"
                cols="50"
            />
            <button onClick={handleCreatePost}>Опубликовать</button>
            <button onClick={() => history.push("/")}>Отмена</button>
        </div>
    );
}

export default CreatePost;
