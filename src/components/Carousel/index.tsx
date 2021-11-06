import { VideoCardGroupContainer, Title, ExtraLink } from "./styles";
import { VideoCard } from "./VideoCard";
import { Slider, SliderItem } from "./Slider";
import { CategoryDTO } from "data/@types/categoryDto";

interface CarouselProps {
  ignoreFirstVideo?: boolean;
  category: CategoryDTO;
}

function Carousel({ ignoreFirstVideo, category }: CarouselProps) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || "red" }}>
            {categoryTitle}
          </Title>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export { Carousel };
