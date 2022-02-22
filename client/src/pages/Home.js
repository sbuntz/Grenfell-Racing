import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// File imported
import SideHeader from "../components/SideHeader";
import HeaderTwo from "../components/HeaderTwo/index";

const HomeBlog = () => {
    return (
        <div className={'main-wrapper has-side-header'}>
            <HeaderTwo/>
            <SideHeader mobile={false}/>

            <div className="section-wrap section"></div>
            <Row>
            <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Capacity</p>
                      <CardTitle tag="p">150GB</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Update Now
                </div>
              </CardFooter>
            </Card>
          </Col>
          </Row>

  </div>
    );
};

export default HomeBlog;
