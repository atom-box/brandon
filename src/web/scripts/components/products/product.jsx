// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardHeader, CardText, CardBody, CardTitle
} from 'reactstrap';

// Containers and Components

const Product = ({ product }) => (
    <Card className="mb-4 box-shadow">
        <CardHeader>
            <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardBody>
            <CardTitle>${product.price} <small className="text-muted">/ mo</small></CardTitle>
            <CardText>{product.description}</CardText>
        </CardBody>
    </Card>
);

// Todo: fill in proper shape
Product.propTypes = {
    product: PropTypes.object
};

export default Product;