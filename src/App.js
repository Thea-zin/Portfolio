import './App.css';
import Header from './components/header/header'
import Intro from './components/introduction/intro'
import Aboutme from './components/aboutme'
import Technology from './components/technology';
import Animation from './components/3d'
import ShowCase from './components/projectshowcase/projectShowCase'
import Tortbal from './components/projectshowcase/Tortbal'
import AIT from './components/projectshowcase/ait'
import Achievements from './components/achievements';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
        <Header/>
        <Intro/>
        <Aboutme/>
        <Technology/>
        <ShowCase/>
        <Tortbal/>
        <AIT/>
        <Achievements/>
        <Footer/>
        <div className='h-200'>
        

        </div>
    </div>
  );
}

export default App;
