
import logo from './logo.svg';
import './App.css';
import Home from './Components/Header/Home/Home';
import Profile from './Components/Header/Profile/Profile';
import About from './Components/About/About';
import "aos/dist/aos.css";
import Projects from './Components/Projects/Projects';
import footer from './Components/Footer/Footer';
import firebaseConfig from '../src/firebaseConfig'
import firebase from "firebase/app";
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
// import ParticleBackground from './Components/ParticleBackground';
// import Particles from 'react-particles-js';
import SendEmail from './Components/SendEmail/SendEmail';


function App() {
  if (firebase.apps.length===0) {
    firebase.initializeApp(firebaseConfig);
   }
  return (
    

      <div className="container">
       
        {/* <Particles params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} /> */}
        {/* <ParticleBackground/> */}
        <Home></Home>
        <Profile></Profile>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <SendEmail></SendEmail>
        <Footer></Footer>
        
    </div>
    
  );
}

export default App;
