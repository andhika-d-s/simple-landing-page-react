import Logo from './logo.svg';
import './App.css';
import Navbar from './components/nav/navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Product from './components/product/Product';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar logo={Logo}/>
      <Header />
      <About />
      <Product />
      <Testimonial />
      <Contact />
      <Footer logo={Logo} />
    </div>
  );
}

export default App;
