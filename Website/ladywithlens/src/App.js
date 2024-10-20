import React from 'react';
import Home from './pages/Home/Home';
import Header from './components/Header/Header'; // Import Header component

function App() {
  return (
    <div>
      <Header />  {/* Add Header here */}
      <Home />
    </div>
  );
}

export default App;
