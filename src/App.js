import React from "react";
import Header from "./components/Header.component";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./Pages/Home";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>}/>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
