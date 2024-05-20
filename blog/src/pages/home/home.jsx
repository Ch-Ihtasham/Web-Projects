import Header from "../../header/header";
import Post from "../../posts/Post";
import "./home.css"
import Sidebar from "../../sidebar/sidebar";


export default function home() {
  return (
    <>
      <Header/>
    <div className="home">
    <Post/>
    <Sidebar/>
    </div>
    </>
  );
}
