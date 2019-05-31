// Import React
import React from 'react';
import styled from 'react-emotion';

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Appear, Slide, Image } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme(
  {
    primary: '#0d1016',
    secondary: '#FFEDFF',
    tertiary: '#fcc303',
    quaternary: '#CECECE',
  },
  {
    primary: 'Noto Serif',
    secondary: 'Helvetica',
  }
);
const images = {
  title: require('./images/title.png'),
  titlecat: require('./images/titlecat.png'),
  cats: require('./images/giphy.webp'),
  objliteral: require('./images/objLiteral.png'),
};

const CustomListItem = styled(ListItem)`
  font-size: 0.75em;
  margin: 1em;
  min-width: 16em;
  line-height: 1.2;
`;

//////////////////////////////////////////
const CustomSlide = styled(Slide)`
  margin-top: -6em;
`;

const TitleGif = styled(Image)`
  position: absolute;
  top: 60%;
  right: 43%;
`;

const SlideTitle = styled(Heading)`
  text-align: center;
  font-size: 30px;
  font-weight: normal;
  font-style: italic;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom']}
        transitionDuration={500}
        theme={theme}
        //////////////////////////////////////////
        contentWidth='2000'
        bgColor='primary'>
        <Slide transition={['']} transitionDuration={0}>
          <div style={{ postion: 'relative' }}>
            <Image src={images.title} />
          </div>
        </Slide>
        <Slide transition={['']}>
          <div style={{ position: 'relative' }}>
            <Image src={images.titlecat} />

            <TitleGif src={images.cats} />
          </div>
        </Slide>
        <CustomSlide>
          <SlideTitle textColor='secondary'>Object Literals</SlideTitle>
          <div style={{ display: 'flex' }}>
            <Appear>
              <Image src={images.objliteral} />
            </Appear>

            <List>
              <Appear>
                <CustomListItem>
                  <strong>
                    <em>Encapsulation</em>
                  </strong>{' '}
                  - related data and functionality together
                </CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>
                  What if you need to make more of these objects?
                </CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>Breaks DRY principle</CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>Error-prone</CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>
                  What if you need to change one of the methods?
                </CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>
                  What if you need to add / remove methods for all?
                </CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>
                  Copies of identical functions — bad for memory
                </CustomListItem>
              </Appear>
            </List>
          </div>
        </CustomSlide>
        <CustomSlide>
          <SlideTitle textColor='secondary'>Factory Functions</SlideTitle>
          {/* <div style={{ display: 'flex' }} /> */}
        </CustomSlide>
      </Deck>
    );
  }
}
