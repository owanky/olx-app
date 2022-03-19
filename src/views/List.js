import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Badge, Figure, ListGroup} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const List = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/adverts");
            //console.log(response.data);
            setList(response.data);
        }
        fetchData();
    }, []);


    return (
        <div>
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
                                        src={advert.image}
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