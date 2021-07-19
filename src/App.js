import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import './app.css'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
