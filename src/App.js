import React from 'react';
import './App.css';
import Reg from './component/signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/home';
import Signup from './component/signup';
import Modal from './component/modal';
import LoginForm from './component/signin';

class App extends React.Component {


    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className='navbar-brand'>React Examples</a>
                </nav>

                {/* <Reg/> */}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="signup" element={<Signup/>}/>
                        <Route path="login" element={<LoginForm/>}/>
                        
                    </Routes>
                    
                </BrowserRouter>

            </div>
        );
    }

}
export default App;
