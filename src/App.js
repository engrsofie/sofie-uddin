import logo from './logo.svg';
import './App.css';
import Home from './Components/Header/Home/Home';
import Profile from './Components/Header/Profile/Profile';
import About from './Components/About/About';
import "aos/dist/aos.css";
import Projects from './Components/Projects/Projects';
import firebaseConfig from '../src/firebaseConfig'
import firebase from "firebase/app";

function App() {
  if (firebase.apps.length===0) {
    firebase.initializeApp(firebaseConfig);
   }
  return (
      <div className="container ">
        <Home></Home>
        <Profile></Profile>
        <About></About>
        <Projects></Projects>
    </div>
  );
}

export default App;
