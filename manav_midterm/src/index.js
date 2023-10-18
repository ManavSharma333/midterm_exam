import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from "./pages/AddProduct";
import SignUp from "./pages/SignUp";
ReactDOM.render(
  <React.StrictMode>
    <div>
      <AddProduct />
      <SignUp />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


 