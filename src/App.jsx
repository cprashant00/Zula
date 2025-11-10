import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import Blogs from "./Pages/Blogs";
import AppDetail from "./Pages/AppDetail";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Blogs' element={<Blogs/>}/>
          {/* <Route path="/AppDetail" element={<AppDetail/>}>
            <Route path=":AppID" element={<AppDetail/>}/>
          </Route> */}
          <Route path="/app-details/:appId" element={<AppDetail />} />
          <Route path="/BlogDetail/:BlogId" element={<BlogDetails/>}/>
        </Routes>
        <main className="main-content">
          {/* <Home/> */}
        </main>
        <Footer />
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
