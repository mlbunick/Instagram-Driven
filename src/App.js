import Navbar from "./Navbar";
import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";
export default function App() {
  return (
    <>
        <Navbar/>
        <div class="corpo">
          <div class="esquerda">
            <Stories/>
            <Posts/>
          </div>

          <SideBar/>
        </div>
    </>
  );
}
