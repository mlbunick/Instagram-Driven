export default function SideBar(){
    
    const usuario = "catanacomics"
    const imagem = "assets/img/catanacomics.svg"

    return(
        <div class="usuario">
          <img src={imagem} alt="imagem de perfil"/>
          <div class="texto">
            <span>
              <strong>{usuario}</strong>
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}