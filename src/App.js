import Navi from "./components/Navi";
import Main from "./components/Main";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import News from "./components/News";
import Contact from "./components/Contact";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import LoadingPage from "./components/LoadingPage";
function App() {
  return (
    <>
      {/*  */}
      
      <Routes>
        <Route path="/" element={<LoadingPage/>} />
        <Route path="bilgeadam" element={<Navi />}>
          <Route path="main" element={<Main />} />
          <Route path="blog" element={<Blog />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news/:newsId" element={<Content />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
