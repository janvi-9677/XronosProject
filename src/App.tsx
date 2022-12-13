
import "./App.css";
import React, {  Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { webRoutes } from "routes";
const App = () => {
  return (
    <div className="App">
      <Router>


        
        <Suspense fallback={<div>loding....</div>}>
          <Routes>
            {webRoutes.map((rt, index) => {
              return <Route path={rt.path} element={rt.element} key={index} />;
            })}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
