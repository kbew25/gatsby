import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Feature from "../Feature/Feature";

const HeroCarousel = ({ slides }) => {
  console.log(slides);
  return (
    <Splide aria-label="Carousel of articles"
    options={{
      type: 'fade',
      rewind: true,
      arrows: false,
      width: 920,
    }} hasTrack={ false }>
      <SplideTrack>
        {slides && slides.map((slide, index) => (
          <SplideSlide key={index}>
            <Feature article={slide.node} large="true" slideCount={index + 1} />
          </SplideSlide>
        ))}
      </SplideTrack>
      <ul class="splide__pagination" style={{
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: '0 30px',
        bottom: '30px',
      }}></ul>
    </Splide>
  )
}

export default HeroCarousel;
