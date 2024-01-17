import { Col, Container, Row } from "react-bootstrap"
import Banner from "../components/banner/Banner"
import Helmet from "../components/helmet/Helmet"
import styles from "../styles/home.module.css"
import Services from "./Services"
import ContactUs from "../components/contactUs/ContactUs"
import GetInTouch from "../components/getInTouch/GetInTouch"
import Blog from "../components/blog/Blog"

const Home = () => {
  return (
    <Helmet title="Home">
      <div className="banner-main-area">
        <Banner />
      </div>

      <section className={styles.services}>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <span className="span-title">Our Services</span>
              <h3 className="section-title">Quality Servicing Opportunity</h3>
            </Col>
            <Services />
            <Blog />
          </Row>
        </Container>
        <ContactUs />
        <Container>
          <Row>
            <GetInTouch />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
