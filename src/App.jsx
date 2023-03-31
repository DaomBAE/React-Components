import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    // Container
    <div className="bg-red-100 min-h-screen">
      <Header/>
      <main>
        <Introduce/>
        <Portfolio/> 
        <Contact/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;