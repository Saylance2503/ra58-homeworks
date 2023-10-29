import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ViewEditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState("");

    useEffect(() => {
        fetch(`http://localhost:7070/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data.post))
            .catch((error) => {
                console.error("Ошибка при загрузке поста: ", error);
            });
    }, [id]);

    const handleEditPost = () => {
        setIsEditing(true);
        setEditedContent(post.content);
    };

    const handleSavePost = () => {
        fetch(`http://localhost:7070/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: editedContent }),
        })
            .then(() => {
                setPost({ ...post, content: editedContent });
                setIsEditing(false);
            })
            .catch((error) => {
                console.error("Ошибка при сохранении поста: ", error);
            });
    };

    const handleDeletePost = () => {
        fetch(`http://localhost:7070/posts/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error("Ошибка при удалении поста: ", error);
            });
    };

    return (
        <div>
            {post ? (
                <div>
                    {isEditing ? (
                        <div>
                            <h1>Редактировать пост</h1>
                            <textarea
                                value={editedContent}
                                onChange={(e) => setEditedContent(e.target.value)}
                                rows="4"
                                cols="50"
                            />
                            <button onClick={handleSavePost}>Сохранить</button>
                        </div>
                    ) : (
                        <div>
                            <h1>Пост</h1>
                            <p>{post.content}</p>
                            <button onClick={handleEditPost}>Редактировать</button>
                            <button onClick={handleDeletePost}>Удалить</button>
                        </div>
                    )}
                </div>
            ) : (
                <p>Загрузка...</p>
            )}
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
}

export default ViewEditPost;
