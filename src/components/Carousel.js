import React from 'react'
import { CarouselItem,Carousel } from 'react-bootstrap'

export const MyCarousel = () => {
    return (
        <Carousel>
  <Carousel.Item interval={600}>
    <img
      className="d-block w-100"
      src="https://www.fishbowl.com.my/wp-content/uploads/solufit_B.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={600}>
    <img
      className="d-block w-100"
      src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Galleries/10+Fitness+Tips/Muscle-confusion-is-the-only-way-to-go..jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={600}>
    <img
      className="d-block w-100"
      src="https://media.licdn.com/dms/image/C511BAQFI9Kc96vwQig/company-background_10000/0?e=2159024400&v=beta&t=_0Xa2B0M3vkorj4kjGJUEqZRqeLxyYKczs-5tU7aS1A"
      alt="Third slide"
    />
    <Carousel.Caption>
      
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
    )
}
