import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageCTA from "./pages/PageCTA";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/page-three" element={<PageThree />} />
          <Route path="/page-cta" element={<PageCTA />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
