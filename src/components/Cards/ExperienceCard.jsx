import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 0.1px solid #e6c200;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
    padding: 10px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Left = styled.div`
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  ${Card}:hover & {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
`;

const Skills = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const IconPreview = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;
  margin-top: auto;
  align-self: flex-start;

  &:hover {
    opacity: 0.85;
  }

  @media only screen and (max-width: 768px) {
    height: 70px;
    width: 70px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.7);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255,255,255,0.4);
`;

const ExperienceCard = ({ experience }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card>
        <Top>
          <Left>
            <Image src={experience.img} />
            <Body>
              <Role>{experience.role}</Role>
              <Company>{experience.company}</Company>
              <Date>{experience.date}</Date>
            </Body>
          </Left>
        </Top>

        <Description>
          {experience.desc && <Span>{experience.desc}</Span>}
          {experience.skills?.length > 0 && (
            <>
              <br />
              <Skills>
                <b>Skills:</b>
                {experience.skills.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill>
                ))}
              </Skills>
            </>
          )}
        </Description>

        {experience.imgPreview && (
          <IconPreview
            src={experience.imgPreview}
            alt="Preview"
            onClick={() => setModalOpen(true)}
            title="Click to view image"
          />
        )}
      </Card>

      <ModalOverlay isOpen={modalOpen} onClick={() => setModalOpen(false)}>
        <ModalImage
          src={experience.imgPreview}
          onClick={(e) => e.stopPropagation()}
          alt="Enlarged"
        />
      </ModalOverlay>
    </>
  );
};

export default ExperienceCard;
