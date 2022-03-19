import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Badge, Button, Card, Figure, Form, ListGroup, Stack} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const List = () => {
    const [list, setList] = useState([]);
    const [title, setTitle] = useState("");
    const [search, setSearch] = useState();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(title);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/adverts`, {params: { title_like: search }});
            //console.log(response.data);
            setList(response.data);
        }
        fetchData();
    }, [search]);



    return (
        <div>

            <Card className="my-3" body>
                <Form onSubmit={handleSubmit}>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Group controlId="search">
                            <Form.Control
                                type="text"
                                onChange={handleTitle}
                                value={title}
                                placeholder="Wpisz.."
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Wyszukaj
                        </Button>
                    </Stack>
                </Form>
            </Card>


            <ListGroup>


                <ListGroup as="ul" >
                    {list.map((advert) =>(
                        <LinkContainer to={`/detail/${advert.id}`} key={advert.id}>
                            <ListGroup.Item
                                action key={advert.id}
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <Figure>
                                    <Figure.Image
                                        width={171}
                                        height={180}
                                        alt="171x180"
                                        src={`${advert.image}?t=${advert.id}`}
                                    />
                                </Figure>
                                <div className="ms-2 me-auto p-2">
                                    <div className="fw-bold">{advert.title}</div>
                                    <div>Seller: {advert.seller}</div>
                                    <div>Seller Phone: {advert.sellerPhone}</div>
                                </div>

                                <Badge bg="danger" pill>
                                    <h4>${advert.price}</h4>
                                </Badge>

                            </ListGroup.Item>
                        </LinkContainer>
                    ))}
                </ListGroup>

            </ListGroup>
        </div>
    );
};

export default List;