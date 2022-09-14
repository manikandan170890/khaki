import React from 'react';


class Header extends React.Component {

    constructor(props){
        super(props)
        
    }

    render() {
    return <>        
        <div id="banner">
    <h1>{this.props.title}Khaki<em>Template</em> 2.0</h1>
        <p>The fluid, responsive, HTML5, CSS only (image-free) version of the classic free template by MLP Design.</p>
        
        <label for="show-menu" class="responsive">&#9776;</label>
        <input type="checkbox" id="show-menu" role="button" />
        <ul id="topnav">
        <li><a class="active">Home</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
        <li><a href="#">Page 4</a></li>
        <li><a href="#">Page 5</a></li>
        </ul>      
        </div>        
    </>
    }
}

export default Header;