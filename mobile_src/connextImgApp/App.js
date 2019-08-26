/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { Button, Image } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ImageComponent from './appsrc/ImageComponent.js' ;
import LinkList from 'react-native/Libraries/NewAppScreen/components/LearnMoreLinks';

//import {HomeScreen} from './appsrc/HomeScreen';


const App = () => {

  function onPressLink(){
    <ImageComponent />  
     console.log('Image Viewed');};
  
     return (
    <Fragment>
      
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              
              <Text style={styles.sectionDescription}>
               <Text style={styles.highlight}>Connext Welcome to Image Gallery</Text>
              </Text>
              
              {/* <Button 
              onPress={onPressLink}
              color="#841584"
              title="Image View"
              />  */}
              
              <ImageComponent />  
              <ImageComponent />  
              <ImageComponent />  
            </View>
            
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
