import React, {useEffect, useState} from 'react';
import {Badge, Button, Card, Figure, ListGroup} from "react-bootstrap";
import axios from "axios";

const Detail = () => {
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/adverts/5");
            //console.log(response.data);
            setDetail(response.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={detail.image} />
                    <Card.Body>
                        <Card.Title>{detail.title}</Card.Title>
                        <Card.Text>
                            {detail.description}
                        </Card.Text>
                        <Button variant="primary">Kup</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Detail;