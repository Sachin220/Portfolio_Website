// Projects.jsx
import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import Modal from '../Cards/Modal'; // ✅ Make sure path is correct
import { projects } from '../../data/constants';

const Projects = () => {
  const [toggle, setToggle] = useState('all');
  const [openModal, setOpenModal] = useState({
    state: false,
    project: null,
  });

  const filteredProjects = toggle === 'all'
    ? projects
    : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>

        <ToggleButtonGroup>
          {['all', 'web app', 'Machine Learning'].map((category, index) => (
            <React.Fragment key={category}>
              <ToggleButton
                active={toggle === category}
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase().replace('APP', "APP'S")}
              </ToggleButton>
              {index < 2 && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer style={{ minHeight: '40vh' }}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>

      {openModal.state && (
        <Modal
          project={openModal.project}
          closeModal={() => setOpenModal({ state: false, project: null })}
        />
      )}
    </Container>
  );
};

export default Projects;
