import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import { DataProvider } from './context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />}  />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);

/* THIS SNIPPET CAN BE USED TO GRAB THE ID AND GENERATE THE PROJECTBOARD VIA THE PROJECT ID
        <Route 
          exact 
          path='/palette/:id' 
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
    
    THIS IS THE FUNCTION ON THE MINIPALETTE THAT ACTS AS A LINK TO THE ABOVE ROUTE
    goToPalette(id) {
      this.props.history.push(`/palette/${id}`);
  }
*/