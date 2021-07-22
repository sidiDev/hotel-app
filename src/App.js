import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import HotelDetails from './components/HotelDetails/HotelDetails';
import About from './components/About/About';
import './app.css'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/hotel/:title" component={HotelDetails} />
    </BrowserRouter>
  );
}

export default App;
