import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Image
} from 'react-native';
import{Icon} from 'react-native-elements'


const { width, height } = Dimensions.get("window");

export default class RRContent2 extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <>
        <View
        style={{ zIndex: 1 }}>

            <View style={styles.contentBackground}>
                <Icon
                name='ios-close-circle'
                type='ionicon'
                color='#828782'
                containerStyle={{zIndex: 999, position: 'absolute', top:13, right: 10 }}
              />

                <View style={styles.content}>
                <Image
                  style={{height:'75%',width:'55%',resizeMode:'contain'}}
                  source={require('../images/addPhoto.png')}/>
                </View>
                <TextInput
                    style={styles.commentInput}
                    placeholder={"간단한 코멘트를 입력해주세요"}
                    placeholderTextColor={"#bebebe"}
                   multiline={false}
                />
            </View>

            <View style={styles.coment}>

                

            </View>
            
        </View>
        </>
    )
  }
}

const styles = StyleSheet.create({
    contentBackground:{
        backgroundColor: '#eaebea',
        marginBottom: 15,
        width:'100%',
        height:height*0.72,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      content:{
        backgroundColor:'#fff',
        width:width*0.8,
        height:width*1.0,
        borderRadius: 10,
        alignItems: "center",
        justifyContent:"center"
      },
      coment:{
        width: '100%',
        height: height*0.01,
        // backgroundColor: '#c98cc9',
       
        paddingTop:10,
        paddingLeft:10
      },
      commentInput:{
        fontSize:21,
        textAlign: 'center',
        paddingTop:30,
        paddingBottom:5
    }
    });