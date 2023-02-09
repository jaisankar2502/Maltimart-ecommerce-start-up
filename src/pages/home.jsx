import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Service from "../service/service";
import products from "../assets/data/products";
import Clock from "../UI/clock";
import Productlist from "../UI/productlist";
import counterImg from "../assets/images/counter-timer-img.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestsellIngProducts, setBestsellIngProduct] = useState([]);
  const [mobileProduct, setmobileProduct] = useState([]);
  const [wirelessProduct, setwirelessProduct] = useState([]);
  const[popularproduct,setPopularproduct]= useState([])
  const year = new Date().getFullYear();
  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    setTrendingProducts(filteredTrendingProducts);

    const filteredBestsellingProducts = products.filter(
      (item) => item.category === "sofa"
    );
    setBestsellIngProduct(filteredBestsellingProducts);

    const filteredwirelessProduct = products.filter(
      (item) => item.category === "wireless"
    );
    setwirelessProduct(filteredwirelessProduct);

    const filteredmobileProduct = products.filter(
      (item) => item.category === "mobile"
    );
    setmobileProduct(filteredmobileProduct);

    const filteredPopularproduct= products.filter(
      (item)=>item.category==='watch'

    )
    setPopularproduct(filteredPopularproduct)

  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistics & Modern </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy{" "}
                </p>
                <motion.button className="shop__btn" whileTap={{ scale: 1.2 }}>
                  <Link to="/shop">SHOP NOW</Link>{" "}
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Service />
      <section className="trending_product">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title"> Trending Products</h2>
            </Col>
            <Productlist data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title"> Best Sales</h2>
            </Col>
            <Productlist data={bestsellIngProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited offer</h4>
                <h3 className="text-white fs-6 mb-2">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                className="shop__btn store__btn"
                whileTap={{ scale: 1.2 }}
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <Productlist data={mobileProduct} />
            <Productlist data={wirelessProduct} />
          </Row>
        </Container>
      </section>

    <section className="popular__category">
    <Container>
    <Row>
    <Col lg='12' className="text-center mb-5">
    <h2 className="section__title">Popular in Category</h2>
    </Col> 
    <Productlist data={popularproduct}/>
    </Row>
    </Container>
    </section>
    </Helmet>
  );
};

export default Home;
