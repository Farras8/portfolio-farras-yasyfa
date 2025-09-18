// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Educations from './components/Educations';
import ProjectDetailPage from './components/ProjectDetailPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-950/90 via-gray-900/90 to-black/90 text-gray-100 font-sans antialiased">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Experience />
                <Educations />
                <Projects />
                <Certificate />
                <Skills />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;