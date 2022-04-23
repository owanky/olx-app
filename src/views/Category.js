import React from 'react';
import {Button, Col} from "react-bootstrap";

const Category = () => {
    return (
        <div as={Col} md="4" className="m-3">
            <Button variant="outline-dark">Dark</Button>
            <Button variant="outline-dark">Dark</Button>
            <Button variant="outline-dark">Dark</Button>
            <Button variant="outline-dark">Dark</Button>
        </div>
    );
};

export default Category;