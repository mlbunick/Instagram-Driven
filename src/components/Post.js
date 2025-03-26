import { useState } from "react";

export default function Post({ usuario, usuarioImg, postImg, postAlt, likedBy, likedByImg, initialLikes }) {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [likes, setLikes] = useState(initialLikes);

    function toggleLike() {
        setLiked((prevLiked) => {
            const newLiked = !prevLiked;
            setLikes(newLiked ? likes + 1 : likes - 1);
            return newLiked;
        });
    }

    function likeOnImage() {
        if (!liked) {
            setLiked(true);
            setLikes(likes + 1);
        }
    }

    function toggleSave() {
        setSaved(!saved);
    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={usuarioImg} alt={usuario} />
                    {usuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={postImg} alt={postAlt} onClick={likeOnImage} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon 
                            name={liked ? "heart" : "heart-outline"} 
                            onClick={toggleLike} 
                            style={{ color: liked ? "red" : "black", cursor: "pointer" }}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon 
                            name={saved ? "bookmark" : "bookmark-outline"} 
                            onClick={toggleSave} 
                            style={{ cursor: "pointer" }}
                        ></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={likedByImg} alt={likedBy} />
                    <div className="texto">
                        Curtido por <strong>{likedBy}</strong> e <strong>outras {likes.toLocaleString()} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
