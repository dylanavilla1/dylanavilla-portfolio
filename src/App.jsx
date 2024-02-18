import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-pages";
import { AboutPage } from "./pages/about-pages";
import { Navbar } from "./components/Navbar/Navbar";
import { ProjectPage } from "./pages/project-pages";
import { ContactPage } from "./pages/contact-pages";
import { Footer } from "./components/Footer/Footer";
import { useEffect } from "react";
export const App = () => {
  useEffect(() => {
    alert("this page for dekstop only, for mobile phone coming soon");
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}></Route>
        <Route
          path='/about'
          element={<AboutPage />}></Route>
        <Route
          path='/project'
          element={<ProjectPage />}></Route>
        <Route
          path='/contact'
          element={<ContactPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
