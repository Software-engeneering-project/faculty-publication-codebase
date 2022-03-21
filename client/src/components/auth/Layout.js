import React from 'react'
import { Row, Col } from 'react-bootstrap'

const noPadding = { padding: 0 }

const Layout = ({ Left, Right }) => {

    return (
        <Row style={{ minHeight: '100vh' }}>
            <Col xs="12" lg="7" md="6" style={noPadding}>
                <Left />
            </Col>

            <Col xs="12" lg="5" md="6" style={noPadding}>
                <Right />
            </Col>
        </Row>
    )
}

export default Layout

