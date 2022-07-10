import React, {useState, useEffect} from "react";
import "./assets/stylesheets/main.css"
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
      Main content goes here
     </div>}
    </>
  );
}

export default App;
