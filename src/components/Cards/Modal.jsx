import React, { useEffect } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 720px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 28px;
  color: ${({ theme }) => theme.text_secondary};
  cursor: pointer;
`;

const MediaWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const GitHubButton = styled.a`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.blue};
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  display: inline-block;
  width: max-content;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
    color: navy; /* Change text color to navy blue on hover */
    transform: scale(1.05); /* Zoom in slightly */
  }
`;



const Modal = ({ project, closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  const isYouTube = project.video && (project.video.includes('youtube.com') || project.video.includes('youtu.be'));
  const isMP4 = project.video && project.video.endsWith('.mp4');

  const getYouTubeEmbedUrl = (url) => {
    if (url.includes('watch?v=')) {
      return url.replace('watch?v=', 'embed/');
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  return (
    <Overlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>×</CloseButton>
        <Title>{project.title}</Title>

        <MediaWrapper>
          {isYouTube ? (
            <Iframe
              src={getYouTubeEmbedUrl(project.video)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : isMP4 ? (
            <VideoPlayer controls autoPlay muted>
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </VideoPlayer>
          ) : (
            <Image src={project.image} alt={project.title} />
          )}
        </MediaWrapper>

        <Description>{project.description}</Description>

        {project.github && (
          <GitHubButton href={project.github} target="_blank">
            View on GitHub
          </GitHubButton>
        )}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
