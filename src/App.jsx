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
    <div className="site-shell relative pt-[72px] md:pt-0">
      <GradientBlobCursor/>
      <Header/>
        <div className="gradient1 h-[260px] w-[260px] rounded-full bg-[#1879D3]/25 blur-[170px] absolute top-[150px] left-[6%]"></div>
        <Home />
      <Nav/>
      <About/>
      <Experience/>
      <Projects/>
      {/* <Publications/> */}
      <Contact/>
    </div>
  );
}

export default App;
