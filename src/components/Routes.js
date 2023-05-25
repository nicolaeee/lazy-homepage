import React from "react";
import { Route, Switch } from "react-router-dom";
import MyWork from "./MyWork/MyWork";

const Routes = () => {
  return (
    <Routes>
      {/* Other routes */}
      <Route path="/my-work" element={MyWork} />
    </Routes>
  );
};

export default Routes;
