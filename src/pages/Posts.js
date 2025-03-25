import { useState } from "react";

export default function Posts() {
    const posts = [
        {
            usuario: "meowed",
            usuarioImg: "/assets/img/meowed.svg",
            postImg: "/assets/img/gato-telefone.svg",
            postAlt: "gato-telefone",
            likedBy: "respondeai",
            likedByImg: "/assets/img/respondeai.svg",
            likes: 101523
        },
        {
            usuario: "chibirdart",
            usuarioImg: "/assets/img/chibirdart.svg",
            postImg: "/assets/img/dog.svg",
            postAlt: "dog",
            likedBy: "meowed",
            likedByImg: "/assets/img/meowed.svg",
            likes: 99159
        },
        {
          usuario: "barked",
          usuarioImg: "/assets/img/barked.svg",
          postImg: "/assets/img/dog.svg",
          postAlt: "dog",
          likedBy: "adorable_animals",
          likedByImg: "/assets/img/adorable_animals.svg",
          likes: 19043
      }
    ];

    return (
        <div className="posts">
            {posts.map((post, index) => (
                <Post 
                    key={index}
                    usuario={post.usuario}
                    usuarioImg={post.usuarioImg}
                    postImg={post.postImg}
                    postAlt={post.postAlt}
                    likedBy={post.likedBy}
                    likedByImg={post.likedByImg}
                    initialLikes={post.likes}
                />
            ))}
        </div>
    );
}

function Post({ usuario, usuarioImg, postImg, postAlt, likedBy, likedByImg, initialLikes }) {
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
        if (!liked) { // Apenas ativa o like se ainda não estiver ativado
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
