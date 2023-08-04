import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navvbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <Navvbar />
      <Home />
      <About />

    </div>
  );
}

export default App;
