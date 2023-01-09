import Header from './Components/Partials/Header/Header';
import Router from './Components/Router/Router';
import FlashMessages from './Components/FlashMessages/FlashMessages'
import Footer from './Components/Partials/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <FlashMessages/>
      <Footer/>
    </div>
  );
}

export default App;
