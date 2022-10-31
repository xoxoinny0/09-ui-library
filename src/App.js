import React, { memo } from "react";
import {Routes, Route} from 'react-router-dom';

import MenuLink from "./component/MenuLink";

import FsLightboxEx from "./pages/FsLightboxEx";
import AosEx from "./pages/AosEx";
import Slider from "./pages/Slider";
import SweetAlert2Ex from "./pages/SweetAlert2Ex";
import ChartEx from "./pages/ChartEx";

const App = memo(() => {
  return (
    <div>
      <h1>UI-Library</h1>

      <nav>
        <MenuLink to='/fs_lightbox'>FsLightboxEx</MenuLink>
        <MenuLink to='/aos'>AosEx</MenuLink>
        <MenuLink to='/slider'>Slider</MenuLink>
        <MenuLink to='/swal'>SweetAlert2Ex</MenuLink>
        <MenuLink to='/chart'>ChartEx</MenuLink>
      </nav>

      <hr />

      <Routes>
        <Route path='/fs_lightbox' element={<FsLightboxEx />}></Route>
        <Route path='/aos' element={<AosEx />}></Route>
        <Route path='/slider' element={<Slider />}></Route>
        <Route path='/swal' element={<SweetAlert2Ex />}></Route>
        <Route path='/chart' element={<ChartEx />}></Route>
      </Routes>
    </div>
  );
});

export default App;
