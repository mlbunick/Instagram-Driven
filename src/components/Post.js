import { useState } from "react";
import { 
  IoHeartOutline, 
  IoHeart, 
  IoChatbubbleOutline, 
  IoPaperPlaneOutline, 
  IoBookmarkOutline, 
  IoBookmark,
  IoEllipsisHorizontal 
} from "react-icons/io5";

export default function Post({
  usuario,
  usuarioImg,
  postImg,
  postAlt,
  likedBy,
  likedByImg,
  initialLikes,
}) {
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
          <IoEllipsisHorizontal style={{ cursor: "pointer" }} />
        </div>
      </div>

      <div className="conteudo">
        <img src={postImg} alt={postAlt} onClick={likeOnImage} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            {liked ? (
              <IoHeart 
                onClick={toggleLike} 
                style={{ color: "red", cursor: "pointer", fontSize: "24px" }} 
              />
            ) : (
              <IoHeartOutline 
                onClick={toggleLike} 
                style={{ cursor: "pointer", fontSize: "24px" }} 
              />
            )}
            <IoChatbubbleOutline style={{ cursor: "pointer", fontSize: "24px", margin: "0 10px" }} />
            <IoPaperPlaneOutline style={{ cursor: "pointer", fontSize: "24px" }} />
          </div>
          <div>
            {saved ? (
              <IoBookmark 
                onClick={toggleSave} 
                style={{ cursor: "pointer", fontSize: "24px" }} 
              />
            ) : (
              <IoBookmarkOutline 
                onClick={toggleSave} 
                style={{ cursor: "pointer", fontSize: "24px" }} 
              />
            )}
          </div>
        </div>

        <div className="curtidas">
          <img src={likedByImg} alt={likedBy} />
          <div className="texto">
            Curtido por <strong>{likedBy}</strong> e{" "}
            <strong>outras {likes.toLocaleString()} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}