export default function Posts(){
    const posts = [
        {
          usuario: "meowed",
          usuarioImg: "/assets/img/meowed.svg",
          postImg: "/assets/img/gato-telefone.svg",
          postAlt: "gato-telefone",
          likedBy: "respondeai",
          likedByImg: "/assets/img/respondeai.svg",
          likes: "101.523"
        },
        {
          usuario: "barked",
          usuarioImg: "/assets/img/barked.svg",
          postImg: "/assets/img/dog.svg",
          postAlt: "dog",
          likedBy: "adorable_animals",
          likedByImg: "/assets/img/adorable_animals.svg",
          likes: "99.159"
        }
    ];

    return (
        <div className="posts">
          {posts.map(post => (
            <Post 
              usuario={post.usuario}
              usuarioImg={post.usuarioImg}
              postImg={post.postImg}
              postAlt={post.postAlt}
              likedBy={post.likedBy}
              likedByImg={post.likedByImg}
              likes={post.likes}
            />
          ))}
        </div>
      );
}

function Post(props){
    return(
        <div class="post">
            <div class="topo">
            <div class="usuario">
                <img src={props.usuarioImg} alt={props.usuario}/>
                {props.usuario}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </div>

            <div class="conteudo">
            <img src={props.postImg} alt={props.postAlt}/>
            </div>

            <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.likedByImg} alt={props.likedBy}/>
                <div class="texto">
                Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.likes} pessoas</strong>
                </div>
            </div>
            </div>
       </div>
    )
        
}