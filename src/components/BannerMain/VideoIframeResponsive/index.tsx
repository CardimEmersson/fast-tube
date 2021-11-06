import { VideoContainer, ResponsiveIframe } from "./styles";

interface VideoIframeResponsiveProps {
  videoID: string;
}

function VideoIframeResponsive({ videoID }: VideoIframeResponsiveProps) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${videoID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

export { VideoIframeResponsive };
