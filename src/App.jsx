import React from 'react'
import Navbar from './components/header/Navbar'
import AboutView from './views/aboutView/AboutView'
import ProjectsView from './views/projectsView/ProjectsView';
import SkillsView from './views/skillsView/SkillsView';
import ContactsView from './views/contactsView/ContactsView';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
    <Navbar />
    <main>
    <AboutView />
       <ProjectsView />
       <SkillsView />
       <ContactsView />
    </main>
   <Footer />
  </>
  );
}

export default App