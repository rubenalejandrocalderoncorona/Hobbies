import React from 'react'
import {Description, Header, Section, SectionBody, Title} from '../../styles'
import {ContentListContainer} from '../ContentList'
import {Work} from '../../types'

interface ProjectsProps {
  projects: Work[]
}

const Projects: React.FC<ProjectsProps> = ({projects}) => (
  <>
    <Header>
      <Title>Hobbies and Projects</Title>
      <Description>What are my hobbies and Projects</Description>
    </Header>
    <Section>
      <SectionBody>
        <ContentListContainer content={projects} />
      </SectionBody>
    </Section>
  </>
)

export default Projects
