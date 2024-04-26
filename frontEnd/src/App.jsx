import Header from "./component/header";
import HomePage from "./pages/HomePage";
import Admin from "./pages/Admin";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer";
import PostDetails from "./component/PostDetails";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer position="top-right" theme="colored"/>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/post/details/:id" element={<PostDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
