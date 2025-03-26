import Story from "./Story";
export default function Stories(){
    const stories = [
        {img: "/assets/img/9gag.svg", usuario: "9gag" },
        {img: "/assets/img/meowed.svg", usuario: "meowed" },
        {img: "/assets/img/barked.svg", usuario: "barked" },
        {img: "/assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
        {img: "/assets/img/wawawicomics.svg", usuario: "wawawicomics" },
        {img: "/assets/img/respondeai.svg", usuario: "respondeai" },
        {img: "/assets/img/filomoderna.svg", usuario: "filomoderna" },
        {img: "/assets/img/memeriagourmet.svg", usuario: "memeriagourmet" }
    ];

    return(
        <div class="stories">
            
            {stories.map(story => <Story imagem={story.img} usuario={story.usuario}/>)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}