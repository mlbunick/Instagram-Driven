import Navbar from "./components/Navbar"
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import SideBar from "./components/SideBar";
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
