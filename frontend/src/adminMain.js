import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useHistory} from "react-router-dom";
import AdminNavigation from './AdminNavigation';
function AdminCards(){
    const history = useHistory();
  
    const routeChange = () =>{ 
      let path = `adminportal`; 
      history.push(path);
    }
    const routeChange1 = () =>{ 
        let path = `adminusers`; 
        history.push(path);
      }
      const routeChange2=()=>{
        let path= `adminmessages`;
        history.push(path);
      }
    return(
        <>
        <AdminNavigation />
        <br></br>
        <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Messages</Card.Title>
          <Card.Text>
            You recieved 4 new Messages from your users 
          </Card.Text>
          <Button variant="primary" onClick={routeChange2}>Open Now</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 hours ago</Card.Footer>
      </Card>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Users</Card.Title>
          <Card.Text>
            List of people using Avid Arts website
          </Card.Text>
          <Button variant="primary" onClick={routeChange1}>Check Now</Button>
        </Card.Body>
        <Card.Footer className="text-muted">1 hours ago</Card.Footer>
      </Card>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Products</Card.Title>
          <Card.Text>
            List of products available on Avid Arts website
          </Card.Text>
          <Button variant="primary"  onClick={routeChange}>Check Now</Button>
        </Card.Body>
        <Card.Footer className="text-muted">29 minutes ago</Card.Footer>
      </Card>
      </>
    )
}

export default AdminCards