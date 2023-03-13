import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import BrandBar from '../components/BrandBar/BrandBar';
import DeviceList from '../components/DevilceList/DeviceList';
import TypeBar from '../components/TypeBar/TypeBar';

const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
