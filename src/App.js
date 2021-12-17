import logo from './logo.svg';
import './App.css';
import Route from './Component/Route';
import Navigation from './Component/Navigation';
import {BrowserRouter} from "react-router-dom";
import Router from './Component/Route';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
