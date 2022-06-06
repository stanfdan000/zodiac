import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { zodiac } from './data';
{/* import the zodiac array */}

function App() {
  return (
    <div className="App">
      <Header />
      <Main zodiac={zodiac}/>
      <Footer />
    </div>
  );
}

export default App;

