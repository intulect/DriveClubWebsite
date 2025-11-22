import Header from './components/Header';
import Countdown from './components/Countdown';
import Features from './components/Features';
import Developers from './components/Developers';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bgDark text-textMain font-body overflow-x-hidden selection:bg-primaryBlue selection:text-white">
      {/* Background Overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20,21,23,0.9), rgba(20,21,23,0.8)), url('https://images.unsplash.com/photo-1542393545-facac42e679e?q=80&w=2000&auto=format&fit=crop')`
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        
        <main>
          <Countdown />
          <Features />
          <Developers />
          <Gallery />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;