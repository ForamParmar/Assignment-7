import Cart from "./components/Cart";
import Header from "./components/Header";
import About from "./components/About";
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Header />
          <Route path='/' element={<Cart />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
