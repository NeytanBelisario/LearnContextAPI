import './App.css';
import { ProviderDashboard } from './Context/Provider.tsx';
import Home from './Home/page.tsx';
import React from 'react';

function App() {
  return (
    <ProviderDashboard>
      <Home/>
    </ProviderDashboard>
  );
}

export default App;
