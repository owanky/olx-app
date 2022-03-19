import React, {useEffect, useState} from 'react';
import {Badge, Button, Card, Figure, ListGroup} from "react-bootstrap";
import axios from "axios";
import {useParams} from "react-router-dom";

const Detail = (props) => {
    const [detail, setDetail] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/adverts/${id}`);
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