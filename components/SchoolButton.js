import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class SchoolButton extends Component{
  static defaultProps = {
    buttonColor: '#85b5ff',
    titleColor: '#fff',
    onPress: () => null,
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity 
      style={[styles.button,{backgroundColor: this.props.buttonColor}]}
      onPress={this.props.onPress}>

        <Text style={[styles.title, {color: this.props.titleColor}]}>
          {this.props.title}
        </Text>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 20,
    height: 55,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		elevation: 2, // Android 
  },
  title: {
    fontSize: 25,
    fontWeight: "700"
  },
});