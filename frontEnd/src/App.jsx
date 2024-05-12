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
import Catigorypage from "./pages/CatigoryPage";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/profile";
import UsersTable from "./pages/tables/userstable";
import PostsTable from "./pages/tables/PostsTable"
import CatTable from "./pages/tables/CatTable"
import CommentTable from "./pages/tables/CommentTable";
import Forgot_password from "./pages/forgot-password";
import Reset_password from "./pages/reset_password";
import NotFound from "./pages/NotFound";
import ProtectedRout from "./component/ProtectedRout";
import ProtectedRoutForAdmin from "./component/ProtectedRoutForAdmin";
function App() {
  return (
    <>
      <ToastContainer position="top-right" theme="colored" />
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRout><HomePage /></ProtectedRout>} />
        <Route path="/admin" element={<ProtectedRoutForAdmin><Admin /></ProtectedRoutForAdmin>} />
        <Route path="/profile/:id" element={<ProtectedRout><Profile /></ProtectedRout>} />
        <Route path="/CreatePost" element={<ProtectedRout><CreatePost /></ProtectedRout>} />
        <Route path="/post/details/:id" element={<ProtectedRout><PostDetails /></ProtectedRout>} />
        <Route path="/catigoryPage/:catigory" element={<ProtectedRout><Catigorypage /></ProtectedRout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<ProtectedRout><Posts /></ProtectedRout>} />
        <Route path="/register" element={<Register />} />
        <Route path="/tables/users" element={<ProtectedRout><UsersTable /></ProtectedRout>} />
        <Route path="/tables/posts" element={<ProtectedRout><PostsTable /></ProtectedRout>} />
        <Route path="/tables/cat" element={<ProtectedRout><CatTable /></ProtectedRout>} />
        <Route path="/tables/comment" element={<ProtectedRout><CommentTable /></ProtectedRout>} />
        <Route path="/forgetPasswrd" element={<ProtectedRout><Forgot_password /></ProtectedRout>} />
        <Route path="/resetPassword" element={<ProtectedRout><Reset_password /></ProtectedRout>} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
