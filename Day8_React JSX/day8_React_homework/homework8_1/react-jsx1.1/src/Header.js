//Header

import React from "react";

class HeaderComponent extends  React.Component{
    render(){
        return (
            <div>
                <h1 style={{color:'red'}}>Header</h1>
                <h2 style={{backgroundColor:'yellow', color:'blue'}}>Menu</h2>
            </div>
        )
    }
}

export default HeaderComponent;