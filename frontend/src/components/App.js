import { CommentsContextProvider } from "../context/CommentsContext";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./Bord";
import Header from './Header'
import Topic1 from "./Topic1";
import Topic2 from "./Topic2";
import Topic3 from "./Topic3";
import Topic4 from "./Topic3";

function App() {
  return (
    <CommentsContextProvider>
      <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/t1" element={<Topic1 />} />  
        <Route path="/t2" element={<Topic2 />} />
        <Route path="/t3" element={<Topic3 />} />
        <Route path="/t4" element={<Topic4 />} />
        <Route path="/*" element={<h1>page not found</h1>} />
      </Routes>
      
      </div>
    </CommentsContextProvider>
  );
}

export default App;
