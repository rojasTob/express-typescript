import {BrowserRouter, Routes, Route} from  "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import Categories from "./pages/Categories";
import Books from "./pages/Books";
import "./App.css";

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/authors" element={<Authors/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/books" element={<Books/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;