import Header from './Components/Partials/Header/Header';
import Router from './Components/Router/Router';
import FlashMessages from './Components/FlashMessages/FlashMessages'
import Footer from './Components/Partials/Footer';
import Modal from './Components/Modal/Modal'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <FlashMessages/>
      <Modal/>
      <Footer/>
    </div>
  );
}

export default App;
