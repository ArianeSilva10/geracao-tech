import React from 'react';
import AppRoutes from './routes/Routes';
import Header from './components/Header';
import Paths from './routes/Paths';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

const App = () => {
    return (
        <div>
          <AppRoutes />
        </div>
    );
};

export default App;