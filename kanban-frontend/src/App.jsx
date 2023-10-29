import "./App.css";
import Board from "./components/Board.jsx";
import AuthPage from './screens/AuthPage.jsx';

import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./screens/RegisterPage.jsx";

function App() {
  const [board_id, setBoardID] = useState(undefined)

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthPage />}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/board" element={<Board board_id={board_id} setBoardID={setBoardID}/>}/>
    </Routes>
   </BrowserRouter>
  );
};

export default App;