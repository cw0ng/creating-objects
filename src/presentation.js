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
    primary: '#0a0e14',
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

const CustomListItem = styled(ListItem)`
  font-size: 1.25rem;
  margin: 2.5rem;
  line-height: 1.45;
`;

const TitleGif = styled(Image)`
  position: absolute;
  top: 60%;
  right: 42.5%;
`;

const SlideTitle = styled(Heading)`
  font-size: 18px;
  font-style: italic;
  margin: 0 0 2em;
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
        <Slide>
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
        </Slide>
        <Slide>
          <SlideTitle textColor='secondary'>Factory Functions</SlideTitle>
          <Layout>
            <Appear>
              <Image src={images.factoryFunction1} />
            </Appear>

            <Appear>
              <Image src={images.factoryFunction2} />
            </Appear>
          </Layout>
        </Slide>
        <Slide transition={['']} transitionDuration={0}>
          <SlideTitle textColor='secondary'>Factory Functions</SlideTitle>
          <Layout>
            <Image src={images.factoryFunction1} />
            <Image src={images.factoryFunction3} />
          </Layout>
        </Slide>
        <Slide transition={['']} transitionDuration={0}>
          <SlideTitle textColor='secondary'>Factory Functions</SlideTitle>
          <Layout>
            <Image src={images.factoryFunction1} />
            <Image src={images.factoryFunction4} />
          </Layout>
        </Slide>
        <Slide>
          <SlideTitle textColor='secondary'>
            The Prototypal Nature of JavaScript
          </SlideTitle>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Image src={images.proto} />

            <List
              style={{
                maxWidth: '31em',
                paddingLeft: '2em',
                margin: '0 auto',
              }}>
              <Appear>
                <CustomListItem>
                  All functions and all arrays are{' '}
                  <em>
                    <strong>also objects</strong>
                  </em>
                </CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>
                  All objects have a hidden <Keyword>__proto__</Keyword> property
                </CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>
                  The <Keyword>__proto__</Keyword> default for objects created using
                  an object literal is <Keyword>Object.prototype</Keyword>. The
                  <Keyword>__proto__</Keyword> default for arrays is
                  <Keyword>Array.prototype</Keyword> and for functions it is
                  <Keyword>Function.prototype</Keyword>
                </CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>
                  <Keyword>__proto__</Keyword> provides access to bonus functionality
                  — if JavaScript doesn't find a method on an object, it checks the
                  object's <Keyword>__proto__</Keyword>
                </CustomListItem>
              </Appear>
            </List>
          </div>
        </Slide>
        <Slide transition={['']} transitionDuration={0}>
          <SlideTitle textColor='secondary'>
            <Keyword>Object.create()</Keyword>
          </SlideTitle>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div>
              <Appear>
                <Image src={images.objectCreate} />
              </Appear>
            </div>

            <div>
              <Appear>
                <Image src={images.objectCreate2} />
              </Appear>

              <List style={{ maxWidth: '23em', paddingLeft: '1em' }}>
                <Appear>
                  <CustomListItem>
                    Use <Keyword>Object.create()</Keyword> to override the default{' '}
                    <Keyword>__proto__</Keyword> reference
                  </CustomListItem>
                </Appear>
                <Appear>
                  <CustomListItem>
                    A new empty object is created, with its{' '}
                    <Keyword>__proto__</Keyword> set to{' '}
                    <em>
                      <strong>catMethods</strong>
                    </em>
                  </CustomListItem>
                </Appear>
                <Appear>
                  <CustomListItem>
                    The new object's <Keyword>__proto__</Keyword> is itself an
                    object, which is why it has its <em>own</em>{' '}
                    <Keyword>__proto__</Keyword> that references the default{' '}
                    <Keyword>Object.prototype</Keyword>
                  </CustomListItem>
                </Appear>
                <Appear>
                  <CustomListItem>
                    This is how <Keyword>Array.prototype</Keyword> and
                    <Keyword>Function.prototype</Keyword> reference back to
                    <Keyword>Object.prototype</Keyword>
                  </CustomListItem>
                </Appear>
                <Appear>
                  <CustomListItem>
                    Look-up process on the "prototype chain"
                  </CustomListItem>
                </Appear>
              </List>
            </div>
          </div>
        </Slide>
        <Slide>
          <SlideTitle textColor='secondary'>
            The <Keyword>prototype</Keyword> Property
          </SlideTitle>
          <Layout>
            <Appear>
              <Image src={images.prototype1} />
            </Appear>
            <List
              style={{
                maxWidth: '16em',
                margin: '4em auto 0',
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
                  (behaviour delegation) by objects that were created by that
                  function using the <Keyword>new</Keyword> keyword
                </CustomListItem>
              </Appear>
              <Appear>
                <CustomListItem>
                  So let's rewrite our function to set the <em>name</em> and{' '}
                  <em>age</em> parameters, and also use the function's{' '}
                  <Keyword>prototype</Keyword> object to store shared functions
                  (instead of putting them in a separate one such as{' '}
                  <em>
                    <strong>catMethods</strong>
                  </em>
                  )
                </CustomListItem>
              </Appear>
            </List>
          </Layout>
        </Slide>
        <Slide>
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

              <List
                style={{
                  maxWidth: '24em',
                  paddingLeft: '1em',
                  margin: '0 auto',
                }}>
                {' '}
                <Appear>
                  <CustomListItem>
                    Functions that require{' '}
                    <Keyword>
                      <strong>new</strong>
                    </Keyword>{' '}
                    to run are called Constructor Functions
                  </CustomListItem>
                </Appear>
                <Appear>
                  <CustomListItem>
                    Constructor functions are capitalized by convention to let other
                    devs know it needs{' '}
                    <Keyword>
                      <strong>new</strong>
                    </Keyword>{' '}
                    to run properly
                  </CustomListItem>
                </Appear>
                <Appear>
                  <CustomListItem>
                    <Keyword>
                      <strong>new</strong>
                    </Keyword>
                    does 3 things for you:
                    <List ordered>
                      <Appear>
                        <CustomListItem>
                          Create an{' '}
                          <strong>
                            <em>empty object</em>
                          </strong>{' '}
                          with an implicit <Keyword>this</Keyword> assignment
                        </CustomListItem>
                      </Appear>
                      <Appear>
                        <CustomListItem>
                          Set the <Keyword>__proto__</Keyword> in the created object
                          to reference the constructor function's{' '}
                          <Keyword>prototype</Keyword> property
                        </CustomListItem>
                      </Appear>
                      <Appear>
                        <CustomListItem>
                          <Keyword>return</Keyword> out the created object
                        </CustomListItem>
                      </Appear>
                    </List>
                  </CustomListItem>
                </Appear>
              </List>
            </div>
          </Layout>
        </Slide>

        <Slide>
          <SlideTitle textColor='secondary'>
            ES6 <Keyword>class</Keyword> Keyword
          </SlideTitle>
          <Appear>
            <Image src={images.class} />
          </Appear>
        </Slide>

        <Slide transition={['']} transitionDuration={0}>
          <SlideTitle textColor='secondary'>
            ES6 <Keyword>class</Keyword> Keyword
          </SlideTitle>
          <Image src={images.class2} />
        </Slide>

        <Slide>
          <SlideTitle textColor='secondary'>Bonus: Subclassing</SlideTitle>
          <Appear>
            <Image src={images.subclass} />
          </Appear>
        </Slide>
        <Slide>
          <SlideTitle textColor='secondary'>Bonus: Subclassing</SlideTitle>

          <Image src={images.subclass2} />
          <a
            href='http://www.cnn.com/travel/article/new-cat-stationmaster/index.html'
            title='Read CNN article about Nitama'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={images.subclass3} />
          </a>
        </Slide>

        <Slide>
          <SlideTitle textColor='secondary'>Fin — Questions?</SlideTitle>
          <Image src={images.fin} />
        </Slide>
      </Deck>
    );
  }
}
