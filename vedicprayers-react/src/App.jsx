import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";

function App() {
  const [searchbarVisible, setSearchbarVisible] = useState(false);
  return (
    <div className="min-h-screen">
      {searchbarVisible ? (
        <Searchbar onClose={() => setSearchbarVisible(false)} />
      ) : (
        <>
          <Header onSearchClick={() => setSearchbarVisible(true)} />
            {/* Sticky navbar while scrolling */}
          <div className="sticky z-20 top-0 bg-white py-4">
            <Navbar />
          </div>
          
          {/* Main Content */}
          <Card />
          <Card2 />

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
