import Story from "./Story";
import { IoChevronForwardCircle } from "react-icons/io5";

export default function Stories() {
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
        <div className="stories">
            {stories.map((story, index) => (
                <Story key={index} imagem={story.img} usuario={story.usuario} />
            ))}

            <div className="setinha">
                <IoChevronForwardCircle 
                    size={24} 
                    style={{
                        color: '#ffffff',
                        cursor: 'pointer',
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
                    }} 
                />
            </div>
        </div>
    )
}