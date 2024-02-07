import { useRef, useState } from "react";
import styled from "styled-components";
import { VideoPlay } from "../../assets";
import demoVideo from "../../assets/video/video.mp4";

interface PlayPauseButtonProps {
  play: boolean;
}

const VideoContent = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Provide type for videoRef
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // Provide type for isPlaying

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  return (
    <>
      <Video ref={videoRef} controls={false} onClick={togglePlayPause}>
        <Source src={demoVideo} type="video/mp4" />
      </Video>
      <PlayPauseButton play={isPlaying} onClick={togglePlayPause}>
        <PlayLogo src={VideoPlay} />
      </PlayPauseButton>
    </>
  );
};

export default VideoContent;

const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  max-height: 610px;
`;

const Source = styled.source`
  border-radius: 30px;
  width: 100%;
  height: 100%;
  max-height: 610px;
`;

const PlayPauseButton = styled.button<PlayPauseButtonProps>`
  display: ${(props) => (props.play ? "none" : "block")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const PlayLogo = styled.img``;
