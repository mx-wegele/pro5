// 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

import logo from './logo.svg';
import './App.css';
import './global.css';



function NavbarLinks() {
  return(
    <>
    <a class="navbarLink">Über uns</a>
    <a class="navbarLink"> Für Unternehmen</a>
    <a class="navbarLink">Für Senior Experts</a>
    <a class="navbarLink">Kontakt</a>
    </>
  )
}

function LoginButton() {
  return(
    <button class="loginbutton">Login</button>
  )
}


function Navbar() {
  return(

    <><p className="h1">Hey!</p>
    <div className="navbar-section">
    <div className="navbar-container">
      <NavbarLinks />
      <LoginButton />
    </div>
    </div>
    
 </>

  );
}

function App() {
  return (
    <Navbar />
  );
}

export default App;
