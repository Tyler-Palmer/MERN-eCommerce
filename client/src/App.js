import React from 'react'
import Navbar from'./components/container/Navbar/Navbar'
import routes from './routes/routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
