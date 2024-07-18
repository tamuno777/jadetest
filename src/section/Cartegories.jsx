import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import mod1 from "/assets/006.jpg";
import mod3 from "/assets/005.jpg";
import mod2 from "/assets/002.jpg";
import mod4 from "/assets/004.jpg";
import mod5 from "/assets/003.jpg";
import mod6 from "/assets/001.jpg";
import { motion } from "framer-motion";

export default function Cartegories() {
  return (
    <div className="cartegories-container pt-5">
      <div className="cartegories-content">
        <div className="px-5 text-center">
          <motion.header
            className=" d-flex justify-content-center"
            initial={{
              x: -100,
            }}
            whileInView={{
              x: 1,
            }}
            transition={{
              duration: 1.3,
              type: "spring",
              damping: 20,
            }}
          >
            <h1>
              <strong>LET'S EXPLORE</strong>
            </h1>
          </motion.header>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            vel?
          </p>
        </div>

        <div
          style={{
            overflow: "hidden",
          }}
        >
          <Container>
            <Row className="px-5 fec  ">
              <Col sm={3} lg={3} md={3} className="p-2">
                <img
                  src={mod1}
                  alt=""
                  style={{
                    width: "100%",
                    height: "30%",

                  }}
                  className=" rounded"
                />
                <p>Lorem, ipsum </p>
              </Col>
              <Col sm={6} lg={6} md={6} className="p-2">
                <img
                  src={mod4}
                  alt=""
                  style={{
                    width: "100%",
                    height:"30%"
                  }}
                  className=" rounded"
                />
                <p>Lorem, ipsum </p>
              </Col>
              <Col sm={3} lg={3} md={3} className="p-2">
                <img
                  src={mod3}
                  alt=""
                  style={{
                    width: "100%",
                    height: "30%",

                  }}
                  className=" rounded"
                />
                <p>Lorem, ipsum </p>
              </Col>
            </Row>

            <Row
              className="px-5 sec  "
              style={{
                position: "relative",
                // top:'-90px'
              }}
            >
              <Col sm={5} lg={5} md={5} className="p-2">
                <img
                  src={mod2}
                  alt=""
                  style={{
                    width: "100%",
                    height:"30%"
                  }}
                  className=" rounded"
                />
                <p>Lorem, ipsum </p>
              </Col>
              <Col sm={4} lg={4} md={4} className="p-2 sec2">
                <img
                  src={mod5}
                  alt=""
                  style={{
                    width: "100%",
                    height:"30%"
                  }}
                  className=" rounded"
                />
                <p>Lorem, ipsum </p>
              </Col>
              <Col sm={3} lg={3} md={3} className="p-2 sec3">
                <img
                  src={mod6}
                  alt=""
                  style={{
                    width: "100%",
                    height: "30%",
                  }}
                  className=" rounded"
                />
                <p>Lorem, ipsum </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
