import React from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import './HomeScreen.css'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>HealthDesk</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#about' className='link'>
              About Us
            </Nav.Link>
            <Nav.Link href='#explore' className='link'>
              Explore
            </Nav.Link>
            <Nav.Link href='#contact' className='link'>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='content'>
        <div className='header'>
          <Card.Img src='./images/header.jpg' alt='Card image' />
          <Card.ImgOverlay>
            <Card.Title className='heading-title'>Health-Desk</Card.Title>
            <Card.Text className='text'>
              Keep your vitality. A life without health is like a river without
              water.
            </Card.Text>
            <div className='follow'>
              <h3>Follow us</h3>
              <a href='https://www.facebook.com'>
                <img
                  src='./images/logos/facebook.png'
                  className='logo'
                  alt='fb-logo'
                ></img>
              </a>
              <a href='https://www.instagram.com'>
                <img
                  src='./images/logos/instagram.png'
                  className='logo'
                  alt='insta-logo'
                ></img>
              </a>
              <a href='https://www.twitter.com'>
                <img
                  src='./images/logos/twitter.png'
                  className='logo'
                  alt='twitter-logo'
                ></img>
              </a>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100 car-image'
                  src='./images/im1.jpg'
                  alt='First slide'
                  fluid
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100 car-image'
                  src='./images/im3.jpg'
                  alt='Third slide'
                  fluid
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100 car-image'
                  src='./images/im4.jpg'
                  alt='Third slide'
                  fluid
                />
              </Carousel.Item>
            </Carousel>
          </Card.ImgOverlay>
        </div>
        <div id='about'>
          <p>Hello</p>
        </div>
        <div className='heading'>
          <h1>Our Services</h1>
        </div>
        <CardGroup id='explore'>
          <Card>
            <Card.Img
              variant='top'
              src='./images/card/card1.png'
              className='card-image'
            />
            <Card.Body className='card-body'>
              <Button variant='outline-success' size='mg'>
                CHECK BMI
              </Button>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant='top'
              src='./images/card/card2.jpg'
              className='card-image'
            />
            <Card.Body className='card-body'>
              <Button variant='outline-success' size='mg'>
                CHECK SYMPTONS
              </Button>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant='top'
              src='./images/card/card3.jpg'
              className='card-image'
            />
            <Card.Body className='card-body'>
              <Button variant='outline-success' size='mg'>
                CHECK HEALTHY RECIPES
              </Button>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <div id='contact'></div>
      </div>
    </div>
  )
}

export default HomeScreen
