import Post from "./Post";

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