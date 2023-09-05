import { InjectedConnector, StarknetConfig } from '@starknet-react/core';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import HeaderLayout from './layouts/v2/Header';
import { publicRoutes } from './routes';

// Hook
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

const App = () => {
    const size = useWindowSize();
    const connectors = [
        new InjectedConnector({ options: { id: 'braavos' } }),
        new InjectedConnector({ options: { id: 'argentX' } }),
    ];

    return (
        <StarknetConfig connectors={connectors}>
            <Router>
                <div className="content-wrapper">
                    <HeaderLayout />

                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.element;
                            return <Route key={index} path={route.path} element={<Page />}></Route>;
                        })}
                    </Routes>
                    {/* <Footer /> */}
                    {/* <FooterLayout /> */}
                </div>
            </Router>
        </StarknetConfig>
    );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return <App />;
}
