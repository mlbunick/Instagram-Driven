import { 
  IoLogoInstagram,
  IoPaperPlaneOutline,
  IoCompassOutline,
  IoHeartOutline,
  IoPersonOutline 
} from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <IoLogoInstagram size={24} />
          <div className="separador"></div>
          <img src="/assets/img/logo.png" alt="logo" />
        </div>

        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className="icones">
          <IoPaperPlaneOutline size={24} className="icon" />
          <IoCompassOutline size={24} className="icon" />
          <IoHeartOutline size={24} className="icon" />
          <IoPersonOutline size={24} className="icon" />
        </div>

        <div className="icones-mobile">
          <IoPaperPlaneOutline size={24} className="icon" />
        </div>
      </div>
    </div>
  );
}