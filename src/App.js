import React, {useState, useEffect} from "react";
import "./assets/stylesheets/main.css"
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
     {loading ? <div className="preloader-wrapper absolute"><h1>Aayush</h1></div> : 
     <div>
      <Header />
      <Home />
     </div>}
    </>
  );
}

export default App;
