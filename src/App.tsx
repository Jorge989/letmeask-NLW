import React,{useState,useEffect} from "react";
import { Home } from "./pages/Home";
import {Route,BrowserRouter } from 'react-router-dom'
import { NewRoom } from "./pages/NewRoom";
import { createContext } from 'react'

import { AuthContextProvider} from './contexts/AuthContext'



function App() {

  return (
    <BrowserRouter>
<AuthContextProvider>
      <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
</AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
