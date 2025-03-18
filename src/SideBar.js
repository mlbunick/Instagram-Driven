import Sugestoes from "./Sugestoes"

export default function SideBar(){
    
    const usuario = "catanacomics"
    const imagem = "assets/img/catanacomics.svg"

    return(
        <div class="sidebar">
            <div class="usuario">
            <img src={imagem} alt="imagem de perfil"/>
            <div class="texto">
                <span>
                <strong>{usuario}</strong>
                <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
            </div>

            <Sugestoes/>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}