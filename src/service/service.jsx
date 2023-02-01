import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import "./service.css";
import ServiceData from '../assets/data/serviceData'

const service = () => {
  return (
    <section className="service">
      <Container>
        <Row>

        {
            ServiceData.map((item,index)=>(
                <Col lg="3" md="4" key={index}>
                <motion.div className="service_item" style={{background:`${item.bg}`}} whileHover={{scale:1.1}}>
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            ))
        }
          
          
        </Row>
      </Container>
    </section>
  );
};

export default service;
