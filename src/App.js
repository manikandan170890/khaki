import React from 'react';
import  './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Footer from './Footer';
import CopyRight from './CopyRight';

class App extends React.Component {
    render(){
        return <>
        <div id="wrapper">
        <div id="body">
                <Header title = 'test'/>
                <Sidebar/>
                <Home/>                
            </div>
            <Footer/>
            </div>
            <CopyRight/>
        </>
    }
}


export default App;