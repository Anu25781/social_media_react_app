import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListDataProvider from "./store/post-list-store";


function App() {
  
  const [selectedTab, setSelectedTab]=useState("Home");

  return (
  <PostListDataProvider>
    <div class="app-container">
   <SideBar selectedTab={selectedTab}
    setSelectedTab={setSelectedTab}></SideBar> 
   <div class="content">  
<Header></Header>
{selectedTab ==="Home" ? (<PostList></PostList>): (<CreatePost></CreatePost>)}


<Footer></Footer>

</div>

</div>
</PostListDataProvider>  
    
  )
}

export default App;
