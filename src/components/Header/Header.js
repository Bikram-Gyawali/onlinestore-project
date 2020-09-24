import React from "react";
import { Carousel } from "react-bootstrap";
import "./Header.css";
import Image from "react-bootstrap/Image";
import Bar from "../navbar/Bar";

function Header() {
  return (
    <div>
      <Bar style={{ position: "fixed",top:'0'}} />

      <Carousel className="carousel-inner carousel slide">
        <Carousel.Item>
          <Image
            className="d-block "
            src="https://www.asiaexpressfood.nl/images/brands/wai-wai.jpg"
            alt="First slide"
          ></Image>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block"
            src="https://cdn.pixabay.com/photo/2015/11/28/11/26/sale-1067126__340.jpg"
            alt="First slide"
          ></Image>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block "
            src="https://i.pinimg.com/originals/1c/44/ec/1c44ec84c2096c3728a3025be44f46f8.jpg"
            alt="First slide"
          ></Image>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block "
            src="https://www.promobikes.co.uk/site_images/Aiplane%20Banner.jpg"
          ></Image>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;
