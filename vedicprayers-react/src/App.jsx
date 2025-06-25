import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";

function App() {
  const [searchbarVisible, setSearchbarVisible] = useState(false);
  return (
    <>
      {searchbarVisible ? (
        <Searchbar onClose={() => setSearchbarVisible(false)} />
      ) : (
        <>
          <Header onSearchClick={() => setSearchbarVisible(true)} />
          <Card />
          <Card2 />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
