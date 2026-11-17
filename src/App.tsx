import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home, Projects } from "./components/SystemUI";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Educations";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetailPage from "./components/ProjectDetailPage";
export default function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Projects />
                <Experience />
                <About />
                <Skills />
                <Education />
                <Certificate />
                <Contact />
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route
            path="*"
            element={
              <div className="not-found">
                <h1>Page not found.</h1>
                <a href="/">Return home</a>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
