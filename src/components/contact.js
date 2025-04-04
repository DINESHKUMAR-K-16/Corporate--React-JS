import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';






export default function AddContact(){
    return(
        <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your contact message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7787.900663886049!2d77.64962783993705!3d12.585525150781823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae61611d56d831%3A0xd950a4f58c6412df!2sThalli%2C%20Tamil%20Nadu%20635118!5e0!3m2!1sen!2sin!4v1727448257529!5m2!1sen!2sin"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map of Thalli, Tamil Nadu"
      ></iframe>
      </div>



      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              dineshkumar039641@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              9585 039 641
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              India, Asia country
            </li>
          </ul>
        </div>
      </Container>
    </section>
    )
}