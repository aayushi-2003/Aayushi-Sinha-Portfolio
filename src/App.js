import Nav from './components/Nav';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Experience from './components/Experience';
import GradientBlobCursor from './components/GradientBlobCursor';

function App() {
  return (
    <div className="bg-site relative">
      <GradientBlobCursor/>
      <Header/>
        <div className="gradient1 h-[238px] w-[266px] rounded-[266px] bg-[#1879D3] blur-[175px] backdrop:blur[250px] absolute top-[185px] left-[84px]"></div>
        <div className="gradient2 h-[234px] w-[225px] rounded-[236px] bg-[#7518D3] blur-[150px] backdrop:blur[250px] absolute right-[36px] top-[372px]"></div>
        <Home />
      <Nav/>
      <About/>
      <Projects/>
      <Experience/>
      <Publications/>
      <Contact/>
    </div>
  );
}

export default App;
