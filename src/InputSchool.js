import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import SchoolButton from '../components/SchoolButton';
import ConfirmButtonN from '../components/ConfirmButtonN';
import { Header } from 'react-native-elements';


export default class InputSchool extends React.Component {
 
  render() {
    return (
      <>
      <Header
      leftComponent={{ icon: 'keyboard-arrow-left', color: '#2eaeff' }}
      centerComponent={{style:{fontSize:'500'}, text: '대학교LIST', style: { color: '#2eaeff' } }}
      backgroundColor={"#fff"}
    />

      <View style={styles.container}>
        <View style={styles.select}>
          <SchoolButton title={'울산대학교'}/>
        </View>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  select: {
    flex:1,
    width:'100%',
    // backgroundColor: '#1ad657',
    flexDirection:'row',
    alignItems:'center',
  },
});