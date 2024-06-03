import {BrowserRouter, Routes, Route} from  "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Authors from "./pages/Authors";

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/authors" element={<Authors/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;