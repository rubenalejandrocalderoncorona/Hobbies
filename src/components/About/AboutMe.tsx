import React from 'react'
import styled from 'styled-components'

const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${props => props.theme.colors.lighter};
  ${props => props.theme.media.max.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }
`

const AboutMe: React.FC = () => {
  return (
    <Content>
      <p>
        Maker. Problem solver. 🍉 Fruit Fanatic. 🏄‍♂️ Beach Lover.
        Constantly creating to improve myself and those around me.
      </p>


      <p>
        I use this website as a place to share what I
        learn and do.
      </p>
      <p> Sometimes I&nbsp;
        <a
          href="https://www.youtube.com/@MADialectic/channels"
          target="_blank"
          rel="noopener noreferrer"
        >
          produce
        </a>
        &nbsp;and make&nbsp;
        <a
          href="https://soundcloud.com/ma_dialectics"
          target="_blank"
          rel="noopener noreferrer"
        >
         music
        </a>
        &nbsp;and&nbsp;
        &nbsp;have some additional hobbies
      </p>
      <p>
        You can contact me through them or sending an email to&nbsp;
        <a
          rel="noopener"
          href="mailto:urbennoroac@gmail.com?subject=Hi%20there!"
        >
          urbennoroac@gmail
        </a>
      </p>
    </Content>
  )
}

export default AboutMe
