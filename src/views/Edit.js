import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Button, Col, Form, InputGroup, Nav, Row} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import {useFetchData} from "../hooks/useFetchData";

const schema = yup.object().shape({
    title: yup.string().required().max(50),
    price: yup.number().required().min(0),
    description: yup.string().required(),
    seller: yup.string().required(),
    sellerPhone: yup.string().required(),
    canNegotiate: yup.bool(),
    category: yup.string().required(),
});

const initialValues = {
    title: '',
    price: '',
    description: '',
    image: 'http://placeimg.com/400/400/business',
    seller: '',
    sellerPhone: '',
    canNegotiate: false,
    category: ''
}


const Edit = () => {
    const navigate = useNavigate()
    const {id} = useParams();

    const detail = useFetchData(`/adverts/${id}`, []);

    const list = useFetchData(`/categories`, []);
    const handleFormSubmit = async (values) => {
        await axios.put(`/adverts/${id}`, values);
        navigate(`/detail/${id}`);

    }

    return (
        <div>
            <Formik
                validationSchema={schema}
                onSubmit={handleFormSubmit}
                initialValues={{...initialValues, ...detail}}
                enableReinitialize
            >
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    isValid={touched.title && !errors.title}
                                    isInvalid={!!errors.title}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.title}
                                </Form.Control.Feedback>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik02">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="price"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    isValid={touched.price && !errors.price}
                                    isInvalid={!!errors.price}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.price}
                                </Form.Control.Feedback>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group as={Col} md="4" controlId="validationFormik02">
                                <Form.Label>Category</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    name="category"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    isValid={touched.category && !errors.category}
                                    isInvalid={!!errors.category}
                                >
                                    <option value="">-</option>
                                    {list.map((category) => (
                                        <option value={category.id} key={category.id}>{category.title}</option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.category}
                                </Form.Control.Feedback>

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationFormik03">
                                <Form.Label>Seller</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Seller"
                                    name="seller"
                                    value={values.seller}
                                    onChange={handleChange}
                                    isInvalid={!!errors.seller}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.seller}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04">
                                <Form.Label>Seller Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="sellerPhone"
                                    name="sellerPhone"
                                    value={values.state}
                                    onChange={handleChange}
                                    isInvalid={!!errors.sellerPhone}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.sellerPhone}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                            <Form.Label>Description</Form.Label>
                            <InputGroup hasValidation>

                                <Form.Control
                                    type="text"
                                    placeholder="description"
                                    aria-describedby="inputGroupPrepend"
                                    as="textarea"
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    isInvalid={!!errors.description}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.description}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                name="canNegotiate"
                                label="I want to negotiate!"
                                onChange={handleChange}
                                isInvalid={!!errors.canNegotiate}
                                feedback={errors.canNegotiate}
                                feedbackType="invalid"
                                id="validationFormik0"
                            />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>


                    )}
            </Formik>
        </div>
    );
};

export default Edit;