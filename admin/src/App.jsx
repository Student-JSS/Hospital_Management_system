import React from "react";
import { Route, Routes} from 'react-router-dom';
import Hero from "./pages/Hero";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Hero/>}/>
      </Routes>
    </div>
  );
};

export default App;
