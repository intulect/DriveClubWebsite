import Header from './components/Header';
import Countdown from './components/Countdown';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bgDark text-textMain font-body overflow-x-hidden selection:bg-primaryBlue selection:text-white">
      {/* Background Overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20,21,23,0.9), rgba(20,21,23,0.95)), url('https://images.unsplash.com/photo-1605218457336-92748b9d00d8?q=80&w=2000&auto=format&fit=crop')`
        }}
      />

      {/* HUD Overlay - Fixed Position */}
      <div className="fixed top-8 right-8 z-50 text-right hidden md:block pointer-events-none">
        <div className="font-heading text-4xl text-white drop-shadow-md mb-1">
          12:00
        </div>
        <div className="flex flex-col">
          <span className="font-black text-lg text-primaryBlue tracking-widest drop-shadow-sm">
            GROVE STREET
          </span>
          <span className="text-sm text-textMuted font-bold">
            LOS SANTOS
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        
        <main>
          <Countdown />
          <Features />
          <Gallery />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;