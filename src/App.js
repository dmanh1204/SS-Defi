import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import React from 'react';
import SiteNavigation from './pages/Home/components/Navbar/SiteNavigation';
import HomepageFooter from './pages/Home/components/Footer/Footer';
import icons from './assets/icons';

const App = () => {
    console.clear();

    return (
        <div
            style={{
                background: `url(${icons.BG_OFFICIAL})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
        >
            <SiteNavigation />

            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.element;
                    return <Route key={index} path={route.path} element={<Page />}></Route>;
                })}
            </Routes>
            <HomepageFooter />
        </div>
    );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
        <Router>
            <App />
        </Router>
    );
}
