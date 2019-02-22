import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class CharButton extends Component{
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#28E7FF' 
  }
  constructor(props){
    super(props); 
  }
   
  render(){
    return (
     
      <TouchableOpacity 
      style={[
        styles.button,
        
      ]}
     >
      
          <Text style={[styles.title]}>
            {this.props.title}
          </Text>

      </TouchableOpacity>
      
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 15,
    height: 40, 
    backgroundColor: 'red',
    paddingRight: 15,
    paddingLeft:15,
    marginRight:10,
    borderColor: '#ff6161',
    borderWidth:1
  },
  title: {
    fontSize: 13,
    color: '#ffffff'
  }
});