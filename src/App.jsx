import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Procted/Home"; 
import Search from "./pages/Procted/Search"; 
import NewThreads from "./pages/Procted/NewThreads";
import Like from "./pages/Procted/Like";
import User from "./pages/Procted/User";
import Error from "./pages/Error"; 
import Register from "./pages/Register";
const App = () => {
  return (
    <>
    <Register/>
    {/*<BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/NewThreads" element={<NewThreads/>}/>
        <Route path="/Like" element={<Like/>}/>
        <Route path="/User" element={<User/>} />
        ]
        <Route path="*" element={<Error />} /> 
      </Routes>
    </BrowserRouter>
    */}
    </>
  );
};

export default App;