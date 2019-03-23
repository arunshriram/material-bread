import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import Section from '../../components/Section';
import ComponentPageLayout from '../../components/ComponentPage/ComponentPageLayout';
import {
  Appbar,
  IconButton,
  Button,
  Badge,
  SearchField,
  Searchbar,
} from '../../../../src/index';
import LiveEdit from '../../components/LiveEdit/LiveEdit';
import ComponentDescription from '../../components/ComponentPage/ComponentDescription';
import Link from '../../components/Link';
import CodeInline from '../../components/CodeInline';
import propData from '../../content/components/appbar/propData';

const sections = [
  { name: 'Demos' },
  { name: 'bg image', sub: true },
  { name: 'search field', sub: true },
  { name: 'search bar', sub: true },
  { name: 'subtitle', sub: true },
  { name: 'custom', sub: true },
];

const liveEditCode = ` <Appbar
  barType={"normal"}
  title={'Page Title'} 
  navigationType={'menu'}
  onNavigation={() => console.log('onNavigation!')}
  actionItems={[
    <Badge
      containerStyle={{marginRight: 16}}
      color={'#e10050'}
      textColor={'white'}
      size={14}
      content={77}>
      <IconButton name="favorite" size={24} color={'white'} />
    </Badge>,
    {name: 'search', onPress: () => console.log('onSearch')},
    {name: 'more-vert'},
  ]}
/>`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Appbar } from 'material-bread';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Appbar title={'Page Title'} />
      <View>
    );
  }
}`;

const withSubtitle = ` <Appbar
  barType={'prominent'}
  title={'Page Title'} 
  subtitle={'Subtitle'}
  navigationType={'menu'}
  actionItems={[
    {name: 'favorite'},
    {name: 'search', onPress: () => console.log('onSearch')},
    <IconButton name="more-vert" size={24} color={'white'} />, 
  ]}
/>`;

const withImage = ` <Appbar
  barType={'prominent'}
  title={'Page Title'} 
  backgroundImage={<Image  source={{uri: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} />}
  navigationType={'menu'}
  actionItems={[
    {name: 'favorite'},
    {name: 'search', onPress: () => console.log('onSearch')},
    <IconButton name="more-vert" size={24} color={'white'} />, 
  ]}
/>`;

const withSearchField = ` 
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isSearching: false,
      value: ''
    };
  }

  render() {
    return (
      <Appbar
        title={'Page Title'} 
        navigationType={'menu'}
        actionItems={[
          <SearchField 
            style={{
              marginHorizontal: 24, 
              flex: this.state.isSearching ? 1 : -1
            }}
            primary
            value={this.state.value}
            onChangeText={(value) => this.setState({value})}
            onFocus={() => this.setState({isSearching: true})}
            onBlur={() => this.setState({isSearching: false})}
            onCloseIcon={() => this.setState({value: ''})}
          />,

          {name: 'favorite'},
          <IconButton name="more-vert" size={24} color={'white'} />, 
        ]}
        navigationType={'close'}
      />
    );
  }
}`;

const withSearchBar = ` 
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      isSearching: true
    };
  }

  render() {
    return (
      <Appbar
        title={'Page Title'} 
        navigationType={'menu'}
        actionItems={[ 
          {name: 'search', onPress: () => this.setState({isSearching: true})},
          {name: 'favorite'},
          <IconButton name="more-vert" size={24} color={'white'} />, 
        ]}
        style={{paddingHorizontal: this.state.isSearching ? 0 : 16}}
      >
      {this.state.isSearching ?  
        <Searchbar
          style={{height: 56, width: '100%', paddingHorizontal: 16}}
          value={this.state.value}
          onChangeText={(value) => this.setState({value})}
          onNavigation={() => this.setState({isSearching: false})}
          onCloseIcon={() => this.setState({value: ''})}
        /> : null}
      </Appbar>
    );
  }
}`;

const custom = `const styles = {
  appbar: {
    alignItems: 'center', 
    justifyContent:'space-between', 
    height: 60, 
    paddingVertical: 0, 
    backgroundColor: 'black'
  },
  left: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent:'flex-start',
  },
  button: {
    height: 30, 
    alignSelf: 'center', 
    marginRight: 16
  },
}

render(
<Appbar style={styles.appbar}>
  <View style={styles.left}>
    <Button text={'Home'} textColor="white" style={styles.button} />
    <Button text={'Install'} textColor="white" style={styles.button} />
    <Button text={'Docs'} textColor="white" style={styles.button} />
    <Button text={'About'} textColor="white" style={[styles.button, {marginRight: 0}]} />
  </View>
  <Button text={'Buy'} type={'contained'} textColor="white" containerStyle={[styles.button, {marginRight: 0}]} />
</Appbar>
)`;

export default class AppbarPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'appbar'}
          title={'Appbar Top'}
          description={
            'The top app bar displays information and actions relating to the current screen.'
          }
          componentDescription={
            <div>
              Appbars are essentially broken into three parts: navigation,
              title, and action buttons. Many combinations are possible using
              these sections, but if you need more customization you can replace
              all of them by passing{' '}
              <CodeInline code="children" type={'prop'} />.
            </div>
          }
          docsLink={'https://material.io/design/components/app-bars-top.html'}
          sideScrollMenuItems={sections}
          importCode={`import { Appbar } from 'material-bread';`}
          liveEditCode={liveEditCode}
          liveEditScope={{ Appbar, IconButton, Image, Badge }}
          usageCode={usageCode}
          usageDescription={
            <div>
              Usage depends entirely on what kind of navigation you are using in
              your app. For example, in <CodeInline code="react-navigation" />{' '}
              you can replace the entire header with a{' '}
              <Link href="  https://hackernoon.com/how-to-use-a-custom-header-and-custom-bottom-tab-bar-for-react-native-with-react-navigation-969a5d3cabb1">
                custom appbar
              </Link>
              .
            </div>
          }
          propData={propData}>
          <Section name="Demos" href="/components/appbar#demos" id="demos">
            <ComponentDescription text="Below are demos of various features and common patterns. You can see even more examples in the Storybook playground." />
          </Section>

          <Section
            name="Background image"
            href="/components/appbar#bg-image"
            id="bg-image">
            <ComponentDescription
              text={
                <div>
                  You must pass in an{' '}
                  <CodeInline code="Image" type={'element'} />
                  component, please read the React Native{' '}
                  <Link href="https://facebook.github.io/react-native/docs/images">
                    docs on Images
                  </Link>{' '}
                  to get a better idea of how to pass in images. Generally they
                  are only used for{' '}
                  <CodeInline code="prominent" type={'value'} /> bars, but can
                  be used on other types.
                </div>
              }
            />
            <LiveEdit code={withImage} scope={{ Appbar, IconButton, Image }} />
          </Section>

          <Section
            name="Search field"
            href="/components/appbar#search-field"
            id="search-field">
            <ComponentDescription
              text={
                <div>
                  You can add a{' '}
                  <CodeInline code="SearchField" type={'element'} /> or any
                  other component directly in the{' '}
                  <CodeInline code="Appbar" type={'element'} />
                </div>
              }
            />
            <LiveEdit
              code={withSearchField}
              scope={{ Appbar, IconButton, SearchField }}
            />
          </Section>

          <Section
            name="Full Search bar"
            href="/components/appbar#search-bar"
            id="search-bar">
            <ComponentDescription
              text={
                <div>
                  The ability to replace components provides various ways to
                  display contextual{' '}
                  <CodeInline code="Appbar" type={'element'} />
                  s. The following demonstrates how one might set up a full
                  search bar. Click the back button to return to a regular
                  <CodeInline code="Appbar" type={'element'} />, click the
                  search icon to open the contextual search appbar.
                </div>
              }
            />
            <LiveEdit
              code={withSearchBar}
              scope={{ Appbar, IconButton, Searchbar }}
            />
          </Section>

          <Section
            name="Subtitle"
            href="/components/appbar#subtitle"
            id="subtitle">
            <ComponentDescription
              text={
                <div>
                  Subtitles can be used on{' '}
                  <CodeInline code="normal" type={'value'} /> or{' '}
                  <CodeInline code="prominent" type={'value'} />{' '}
                  <CodeInline code="barType" type={'prop'} />
                  s, but not <CodeInline code="dense" type={'value'} />. Try
                  changing
                  <CodeInline code="barType" type={'prop'} /> to{' '}
                  <CodeInline code="normal" type={'value'} /> to see how it will
                  display
                </div>
              }
            />
            <LiveEdit code={withSubtitle} scope={{ Appbar, IconButton }} />
          </Section>

          <Section name="Custom" href="/components/appbar#custom" id="custom">
            <ComponentDescription
              text={
                <div>
                  Adding <CodeInline code="children" type={'prop'} /> will
                  replace all internal components with the provided components.
                </div>
              }
            />
            <LiveEdit
              noInline
              code={custom}
              scope={{ Appbar, IconButton, Text, Button, View }}
            />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
