import { VideoIframeResponsive } from "./VideoIframeResponsive";
import {
  BannerMainContainer,
  ContentAreaContainer,
  Item,
  Title,
  Description,
} from "./styles";

export function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

interface BannerMainProps {
  videoTitle: string;
  videoDescription: string;
  url: string;
}

export function BannerMain({
  videoTitle,
  videoDescription,
  url,
}: BannerMainProps) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <Item>
          <Title>{videoTitle}</Title>

          <Description>{videoDescription}</Description>
        </Item>

        <Item>
          <VideoIframeResponsive videoID={youTubeID} />
        </Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
