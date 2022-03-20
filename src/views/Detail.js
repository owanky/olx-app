import React, {useEffect, useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

const Detail = (props) => {
    const [show, setShow] = useState(false);
    const [detail, setDetail] = useState([]);
    const navigate = useNavigate()

    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/adverts/${id}`);
            //console.log(response.data);
            setDetail(response.data);
        }
        fetchData();
    }, [id]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        await axios.delete(`/adverts/${id}`);
        handleClose();
        navigate(`/list`);
    }

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
                        <LinkContainer to={`/detail/${id}/edit`}>
                            <Button type="submit">Edit</Button>
                        </LinkContainer>

                        <Button variant="danger" onClick={handleShow}>
                            Delete
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Do you want to delete the advert?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleDelete}>
                                    Confirm
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Detail;