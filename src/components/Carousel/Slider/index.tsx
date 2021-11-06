import React, { ReactNode } from "react";
import SlickSlider from "react-slick";
import { Container, SliderItem } from "./styles";

interface SliderProps {
  children: ReactNode;
}

function Slider({ children }: SliderProps) {
  return (
    <Container>
      <SlickSlider
        {...{
          dots: false,
          infinite: false,
          speed: 300,
          centerMode: false,
          variableWidth: true,
          adaptiveHeight: true,
        }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
}

export { Slider, SliderItem };
