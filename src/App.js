import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import HotelDetails from './components/HotelDetails/HotelDetails';
import About from './components/About/About';
import Support from './components/Support/Support';
import Contact from './components/Contact/Contact';
import './app.css'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/support" component={Support} />
      <Route path="/contact" component={Contact} />
      <Route path="/hotel/:title" component={HotelDetails} />
    </BrowserRouter>
  );
}

export default App;
