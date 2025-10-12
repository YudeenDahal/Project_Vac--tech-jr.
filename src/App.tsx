
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";

const AppContent = () => {
  return (
    <div
      className={` flex flex-col min-h-screen transition-colors duration-300 `}
    >
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      <main>
        <Routes>
           <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/*" element={<AppContent />} />
    </Routes>    
    </BrowserRouter>
    


  );
}

export default App;
