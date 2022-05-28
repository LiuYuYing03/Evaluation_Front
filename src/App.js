import './App.css';
import React from 'react';
import 'antd/dist/antd.css';

import {Route,  Routes} from 'react-router-dom';

import Home from './pages/Home'
import Department from "./pages/Department";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/department" element={<Department />} />
            </Routes>
        </div>
    );
}
export default App;
