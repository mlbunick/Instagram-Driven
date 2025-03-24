import Navbar from "./pages/Navbar"
import Stories from "./pages/Stories";
import Posts from "./pages/Posts";
import SideBar from "./pages/SideBar";
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
