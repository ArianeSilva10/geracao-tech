import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import PageLayout from '../layouts/PageLayout';
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageLayout />} >

                    <Route index element={<Home />} />

                    <Route path="Products" element={<Products />} />
                    <Route path='Product/:id/:name' element={<Product />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;