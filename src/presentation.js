// Import React
import React from 'react';
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  Layout,
  List,
  Notes,
  Appear,
  Text,
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
  proto: require('./images/proto.png'),
  objectCreate: require('./images/objectCreate.png'),
  objectCreate2: require('./images/objectCreate2.png'),
  prototype1: require('./images/prototype1.png'),
  new1: require('./images/new1.png'),
  new2: require('./images/new2.png'),
  class: require('./images/class.png'),
  class2: require('./images/class2.png'),
  subclass: require('./images/subclass.png'),
  subclass2: require('./images/subclass2.png'),
  subclass3: require('./images/subclass3.png'),
  fin: require('./images/fin.png'),
};

const CustomList = styled(List)`
  list-style-position: outside;
`;

const CustomListItem = styled(ListItem)`
  font-size: 1.5rem;
  margin: 2.5rem;
  line-height: 1.45;
`;

//////////////////////////////////////////
const CustomSlide = styled(Slide)`
  margin-top: -10em;
`;

const TitleGif = styled(Image)`
  position: absolute;
  top: 60%;
  right: 43%;
`;

const SlideTitle = styled(Heading)`
  font-size: 22px;
  font-style: italic;
  margin: 1em;
`;

const Keyword = styled(Text)`
  color: #9fffc6;
  font-style: italic;
  font-size: 1em;
  margin: 0 0.25em;
  display: inline-block;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={1000}
        theme={theme}
        //////////////////////////////////////////
        contentWidth={2000}
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
            <Appear>
              <CustomList>
                <CustomListItem>
                  <strong>
                    <em>Encapsulation</em>
                  </strong>{' '}
                  — related data and functionality together
                </CustomListItem>

                <CustomListItem>
                  What if you need to make more of these objects?
                </CustomListItem>

                <CustomListItem>Breaks DRY principle</CustomListItem>

                <CustomListItem>Error-prone</CustomListItem>

                <CustomListItem>
                  What if you need to change one of the methods?
                </CustomListItem>

                <CustomListItem>
                  What if you need to add / remove methods for all?
                </CustomListItem>

                <CustomListItem>
                  Copies of identical functions — bad for memory
                </CustomListItem>
              </CustomList>
            </Appear>
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
        <CustomSlide>
          <SlideTitle textColor='secondary'>
            The Prototypal Nature of JavaScript
          </SlideTitle>
          <Appear>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Image src={images.proto} />

              <CustomList
                style={{
                  maxWidth: '40em',
                  margin: '0 auto',
                  paddingLeft: '1em',
                }}>
                <CustomListItem>
                  All functions and all arrays are{' '}
                  <em>
                    <strong>also objects</strong>
                  </em>
                  . All objects have a hidden <Keyword>__proto__</Keyword> property
                </CustomListItem>
                <CustomListItem>
                  The <Keyword>__proto__</Keyword> default for objects created using
                  an object literal is <Keyword>Object.prototype</Keyword>. The
                  <Keyword>__proto__</Keyword> default for arrays is
                  <Keyword>Array.prototype</Keyword> and for functions it is
                  <Keyword>Function.prototype</Keyword>
                </CustomListItem>

                <CustomListItem>
                  <Keyword>__proto__</Keyword> provides access to bonus functionality
                  — if JavaScript doesn't find a method on an object, it checks the
                  object's <Keyword>__proto__</Keyword>
                </CustomListItem>
              </CustomList>
            </div>
          </Appear>
        </CustomSlide>
        <CustomSlide transition={['']} transitionDuration={0}>
          <SlideTitle textColor='secondary'>Object.create()</SlideTitle>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <Appear>
                <Image src={images.objectCreate} />
              </Appear>
            </div>

            <div>
              <Appear>
                <Image src={images.objectCreate2} />
              </Appear>
              <Appear>
                <CustomList style={{ maxWidth: '25em' }}>
                  <CustomListItem>
                    Use <Keyword>Object.create()</Keyword> to override the default{' '}
                    <Keyword>__proto__</Keyword> reference
                  </CustomListItem>

                  <CustomListItem>
                    A new empty object is created, with its{' '}
                    <Keyword>__proto__</Keyword> set to{' '}
                    <em>
                      <strong>catMethods</strong>
                    </em>
                  </CustomListItem>

                  <CustomListItem>
                    The new object's <Keyword>__proto__</Keyword> is itself an
                    object, which is why it has its <em>own</em>{' '}
                    <Keyword>__proto__</Keyword> that references the default{' '}
                    <Keyword>Object.prototype</Keyword>
                  </CustomListItem>

                  <CustomListItem>
                    This is how <Keyword>Array.prototype</Keyword> and
                    <Keyword>Function.prototype</Keyword> reference back to
                    <Keyword>Object.prototype</Keyword>
                  </CustomListItem>

                  <CustomListItem>
                    Look-up process on the "prototype chain"
                  </CustomListItem>
                </CustomList>
              </Appear>
            </div>
          </div>
        </CustomSlide>
        <CustomSlide>
          <SlideTitle textColor='secondary'>
            The <Keyword>prototype</Keyword> Property
          </SlideTitle>
          <Layout>
            <Appear>
              <Image src={images.prototype1} />
            </Appear>
            <CustomList
              style={{
                maxWidth: '17em',
                margin: '0 auto',
              }}>
              <Appear>
                <CustomListItem>Functions are also objects</CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>
                  Functions have a default <Keyword>prototype</Keyword> property in
                  their object version
                </CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>
                  Use a function's <Keyword>prototype</Keyword> property (which is an
                  object) to store shared functions that will be "inherited"
                  (behaviour delegation) by objects created by that function, using{' '}
                  <Keyword>new</Keyword>
                </CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>
                  So let's rewrite our function to set the <em>name</em> and{' '}
                  <em>age</em> data, and also use the function's{' '}
                  <Keyword>prototype</Keyword> object to store shared functions
                  (instead of putting them in a separate one such as{' '}
                  <em>
                    <strong>catMethods</strong>
                  </em>
                  )
                </CustomListItem>
              </Appear>
            </CustomList>
          </Layout>
        </CustomSlide>
        <CustomSlide>
          <SlideTitle textColor='secondary'>
            Constructor Functions & <Keyword>new</Keyword> Keyword
          </SlideTitle>
          <Layout>
            <Appear>
              <Image src={images.new1} />
            </Appear>
            <div>
              <Appear>
                <Image src={images.new2} />
              </Appear>
              <Appear>
                <CustomList
                  style={{
                    maxWidth: '27em',
                    margin: '0 auto',
                  }}>
                  <CustomListItem>
                    Functions that require{' '}
                    <Keyword>
                      <strong>new</strong>
                    </Keyword>{' '}
                    to run are called Constructor Functions
                  </CustomListItem>

                  <CustomListItem>
                    Constructor functions are capitalized by convention to let other
                    devs know it needs{' '}
                    <Keyword>
                      <strong>new</strong>
                    </Keyword>{' '}
                    to run properly
                  </CustomListItem>

                  <CustomListItem>
                    <Keyword>
                      <strong>new</strong>
                    </Keyword>
                    does 3 things for you:
                    <CustomList ordered>
                      <CustomListItem>
                        Create an{' '}
                        <strong>
                          <em>empty object</em>
                        </strong>{' '}
                        with an implicit <Keyword>this</Keyword> assignment
                      </CustomListItem>

                      <CustomListItem>
                        Set the <Keyword>__proto__</Keyword> in the created object to
                        reference the constructor function's{' '}
                        <Keyword>prototype</Keyword> property
                      </CustomListItem>

                      <CustomListItem>
                        <Keyword>return</Keyword> out the created object
                      </CustomListItem>
                    </CustomList>
                  </CustomListItem>
                </CustomList>
              </Appear>
            </div>
          </Layout>
        </CustomSlide>

        <CustomSlide>
          <SlideTitle textColor='secondary'>
            ES6 <Keyword>class</Keyword> Keyword
          </SlideTitle>
          <Appear>
            <Image src={images.class} />
          </Appear>
        </CustomSlide>

        <CustomSlide transition={['']} transitionDuration={0}>
          <SlideTitle textColor='secondary'>
            ES6 <Keyword>class</Keyword> Keyword
          </SlideTitle>
          <Image src={images.class2} />
        </CustomSlide>

        <CustomSlide>
          <SlideTitle textColor='secondary'>Bonus: Subclassing</SlideTitle>
          <Appear>
            <Image src={images.subclass} />
          </Appear>
        </CustomSlide>
        <CustomSlide>
          <SlideTitle textColor='secondary'>Bonus: Subclassing</SlideTitle>

          <Image src={images.subclass2} />
          <a
            href='http://www.cnn.com/travel/article/new-cat-stationmaster/index.html'
            title='Read CNN article about Nitama'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={images.subclass3} />
          </a>
        </CustomSlide>

        <CustomSlide>
          <SlideTitle textColor='secondary'>Fin — Questions?</SlideTitle>
          <Image src={images.fin} />
        </CustomSlide>
      </Deck>
    );
  }
}
