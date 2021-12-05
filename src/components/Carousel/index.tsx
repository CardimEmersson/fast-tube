import { VideoCardGroupContainer, Title } from "./styles";
import { VideoCard } from "./VideoCard";
import { Slider, SliderItem } from "./Slider";
import { CategoryDTO } from "data/@types/categoryDto";

interface CarouselProps {
  category: CategoryDTO;
}

function Carousel({ category }: CarouselProps) {
  return (
    <VideoCardGroupContainer>
      {category.title && (
        <>
          <Title style={{ backgroundColor: category.color || "#1DB954" }}>
            {category.title}
          </Title>
        </>
      )}
      <Slider>
        {category.videos.map((video, index) => {
          return (
            <SliderItem key={index}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={category.color}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export { Carousel };
