import Sugestao from "./Sugestao"
export default function Sugestoes(){

    const sugestoes = [
        {usuario: "bad.vibes.memes", img: "assets/img/bad.vibes.memes.svg", razao: "Segue você"},
        {usuario: "chibirdart", img: "assets/img/chibirdart.svg", razao: "Segue você"},
        {usuario: "razoesparaacreditar", img: "assets/img/razoesparaacreditar.svg", razao: "Novo no Instagram"},
        {usuario: "adorable_animals", img: "assets/img/adorable_animals.svg", razao: "Segue você"},
        {usuario: "smallcutecats", img: "assets/img/smallcutecats.svg", razao: "Segue você"}
    ]


    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map(sugestao => <Sugestao usuario={sugestao.usuario} imagem={sugestao.img} razao={sugestao.razao}/>)}

        </div>
    )
}
