import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Card,Button } from 'react-bootstrap';


function Footer (){
    return(
        <div className='app-footer'>
            <Card>
            <Card.Header as="h5">
            <img src="https://github.com/panotza/pikkanode/blob/master/pikkanode.png?raw=true" className='pikka-logo' style={{width:'100px'}}/>
            </Card.Header>
            <Card.Body>
                <Card.Title>Pikkanode Footer</Card.Title>
                <Card.Text>
                We have more than just state-of-the-art facilities to help you learn. Our students benefit from work-based placements, research with 'real-world' tasks set by industry experts, professional simulations, opportunities to pitch ideas to panels of experts, and networking opportunities with professionals from industries ranging from large multinationals to small businesses and entrepreneurs.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>

    )
}

export default Footer;