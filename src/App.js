import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from "./screens/Page1/Page1"

function App() {

  const but = useRef(null)

  return (
    <div>
      <Page1 />
    </div>
  );
}

export default App;
