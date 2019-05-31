// Import React
import React from 'react';
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  Layout,
  Fit,
  List,
  Appear,
  Slide,
  Image,
} from 'spectacle';

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
  factoryFunction1: require('./images/factory-function.png'),
  factoryFunction2: require('./images/factory-function-clg1.png'),
  factoryFunction3: require('./images/factory-function-clg2.png'),
  factoryFunction4: require('./images/factory-function-clg3.png'),
};

const CustomListItem = styled(ListItem)`
  font-size: 0.75em;
  margin: 2em;
  min-width: 16em;
  line-height: 1.4;
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
  margin-left: 1em;
  text-align: left;
  font-size: 22px;
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
          <Layout>
            <Appear>
              <Image src={images.objliteral} />
            </Appear>

            <List>
              <Appear>
                <CustomListItem>
                  <strong>
                    <em>Encapsulation</em>
                  </strong>{' '}
                  — related data and functionality together
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
          </Layout>
        </CustomSlide>
        <CustomSlide>
          <SlideTitle textColor='secondary'>Factory Functions</SlideTitle>
          <Layout>
            <Appear>
              <Image src={images.factoryFunction1} />
            </Appear>

            <Appear>
              <Image src={images.factoryFunction2} />
            </Appear>
          </Layout>
        </CustomSlide>
        <CustomSlide transition={['']} transitionDuration={0}>
          <SlideTitle textColor='secondary'>Factory Functions</SlideTitle>
          <Layout>
            <Image src={images.factoryFunction1} />
            <Image src={images.factoryFunction3} />
          </Layout>
        </CustomSlide>
        <CustomSlide transition={['']} transitionDuration={0}>
          <SlideTitle textColor='secondary'>Factory Functions</SlideTitle>
          <Layout>
            <Image src={images.factoryFunction1} />
            <Image src={images.factoryFunction4} />
          </Layout>
        </CustomSlide>
      </Deck>
    );
  }
}
