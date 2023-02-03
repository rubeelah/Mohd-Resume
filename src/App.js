import './assets/style.css';
import './assets/responsive.css';
import './App.css';
import Header from './Components/Header';
import Index from './Components/Index';
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {
  useEffect(()=> {
    AOS.init(({duration: 2000}));
  });
  
  return (
    <div className="App">
      <Header />
      <Index />
    </div>
  );
}

export default App;
