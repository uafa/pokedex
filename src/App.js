import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav class="navigation">
        <a href="/" className="app-name">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Logo"
          />
        </a>
        <div class="navigation-menu">
          <ul>
            <li><Link to="/">Pokedex</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav> 
      <Outlet />
    </>
  );
}

export default App;
