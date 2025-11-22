import Header from './components/Header';
import Countdown from './components/Countdown';
import Features from './components/Features';
import Developers from './components/Developers';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { FaWallet, FaCreditCard, FaIdCard, FaUser } from 'react-icons/fa';

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

      {/* GTA Style HUD Overlay - Fixed Position */}
      <div className="fixed top-8 right-8 z-50 hidden md:flex flex-col items-end gap-2 pointer-events-none font-heading select-none">
        {/* Server Info */}
        <div className="flex items-center gap-2 text-white/80 mb-2">
          <div className="bg-primaryBlue px-2 py-1 rounded text-xs font-bold tracking-wider shadow-[0_0_10px_rgba(34,132,217,0.5)]">
            DRIVECITY RP
          </div>
          <span className="text-xs text-textMuted">v2.0</span>
        </div>

        {/* Status Info */}
        <div className="bg-black/60 backdrop-blur-sm p-4 rounded-lg border-r-4 border-primaryBlue shadow-lg w-64 transform hover:scale-105 transition-transform duration-300">
          {/* Cash */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center text-green-400 gap-2">
              <FaWallet className="text-sm" />
              <span className="text-xs font-sans font-bold uppercase tracking-wide opacity-70">Cash</span>
            </div>
            <span className="text-green-400 font-bold tracking-widest text-lg drop-shadow-md">$12,450</span>
          </div>

          {/* Bank */}
          <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/10">
            <div className="flex items-center text-blue-400 gap-2">
              <FaCreditCard className="text-sm" />
              <span className="text-xs font-sans font-bold uppercase tracking-wide opacity-70">Bank</span>
            </div>
            <span className="text-blue-400 font-bold tracking-widest text-lg drop-shadow-md">$8,500,000</span>
          </div>

          {/* Character Info */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-textMuted mb-1">
                <FaUser className="text-[10px]" />
                <span className="uppercase">Job</span>
              </div>
              <span className="text-white font-bold tracking-wide">POLICE</span>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 text-textMuted mb-1">
                <FaIdCard className="text-[10px]" />
                <span className="uppercase">ID</span>
              </div>
              <span className="text-white font-bold tracking-wide">402</span>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-4 text-right">
          <div className="text-4xl text-white drop-shadow-lg font-black tracking-tighter mb-[-5px]">
            21:42
          </div>
          <div className="flex flex-col items-end">
            <span className="text-primaryBlue font-bold text-sm tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(34,132,217,0.8)]">
              Vinewood Blvd
            </span>
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
              Los Santos
            </span>
          </div>
        </div>
      </div>

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