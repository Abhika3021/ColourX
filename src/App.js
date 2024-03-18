import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import { CARDS } from './Components/Constant';
import { ScrollToTop } from 'react-router-scroll-to-top';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about-us' element={<AboutUs />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/contact-us' element={<ContactUs />}></Route>
            {CARDS.map((card, id) => (
              <Route key={id} path={`/${card.route}`} element={card.component}>
              </Route>
            ))}
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>

    </div>
  );
}

export default App;
