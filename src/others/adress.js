import React from 'react';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
function Adress(){
    return (
        <div>
            <Badge bg="info" style={{width: 100, height:50, fontSize:30}}>
              Info
            </Badge>{' '}
            <p style={{fontSize: 35, marginTop: 20 }}>Adress:berlin wall 21st street</p>
            <br></br>
        </div>
    )
}

export default Adress