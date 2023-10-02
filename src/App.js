import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';
import Stepper from './components/Stepper/Stepper';
import Support from './components/Support'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stepper></Stepper>
      {/* <Support /> */}
      {/* <AllInOne /> */}
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
