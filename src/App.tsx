import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Developers from './components/Developers';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bgDark text-white overflow-x-hidden font-body selection:bg-primary selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <Developers />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;
