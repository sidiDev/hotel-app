import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import HotelDetails from './components/HotelDetails/HotelDetails';
import './app.css'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/hotel/:title" component={HotelDetails} />
    </BrowserRouter>
  );
}

export default App;
