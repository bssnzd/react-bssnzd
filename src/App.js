import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'antd-mobile';
import Routes from "@/router"
import Head from "@/components/layout/head"
function App() {
  return (
    <div className="App">
        <Head></Head>
        <Routes/>
    </div>
  );
}

export default App;
