import './App.css';
import Navbar from './components/Navbar';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import AboutMe from './components/about/AboutMe';
import GitHubStats from './components/githubStats/GitHubStats';
import ContacMe from './components/contactMe/ContacMe';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header />
      <Projects />
      <AboutMe />
      <GitHubStats />
      <ContacMe />
    </>
  );
}

export default App;
