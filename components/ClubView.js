import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';
import ClubClick from './ClubClick';
import Overlay from 'react-native-modal-overlay';

export default class ClubView extends Component{
  state = {modalVisible: false}

  showOverlay() {
    this.setState({modalVisible: true})
  }

  hideOverlay() {
    this.setState({modalVisible: false})
  }
  constructor(props){
    super(props);
  }
  onClose = () => this.setState({ modalVisible: false});
  render(){
    return (
        <View style={styles.container}>
          <TouchableOpacity 
            onPress={this.showOverlay.bind(this)}>
            <View 
            style={styles.logo}>
              <Image
               onPress={this.showOverlay.bind(this)}
                style={styles.Image}
                source={require('../images/logo.png')}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={this.showOverlay.bind(this)}
              style={styles.club}>
                <Text style={styles.clubTitle}>{this.props.clubTitle}</Text>
                <Text style={styles.clubChar}>#{this.props.clubChar}</Text>
            </TouchableOpacity>




            <Overlay visible={this.state.modalVisible} onClose={this.onClose} closeOnTouchOutside animationType="zoomIn" animationDuration={200}
                      childrenWrapperStyle={{width:'100%', backgroundColor: 'white', borderRadius: 15,}} containerStyle={{backgroundColor: 'rgba(50, 50, 50, 0.78)'}} >
              <View style={{flexDriection:'column', }}>
                  <View style={{flexDirection:'row',}}>
                    <View style={styles.logo}>
                      <Image
                        style={styles.Image}
                        source={require('../images/logo.png')}/>
                    </View>
                    <View style={{marginBottom:30, flex:1}}>
                        <Text style={styles.clubTitle}>{this.props.clubTitle}</Text>
                        <Text style={styles.clubChar}>#{this.props.clubChar}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                      <View style={styles.button}>
                          <Image
                            style={styles.ImageR}
                            source={require('../images/introduce.png')}/>
                            <Text style={{textAlign:'center',fontSize:15}}>소개</Text>
                      </View>
                      <View style={styles.button}>
                          <Image
                            style={styles.ImageR}
                            source={require('../images/record.png')}/>
                            <Text style={{textAlign:'center', fontSize:15}}>기록</Text>
                  </View>
                  </View>
              </View>
            </Overlay>



        </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:70,
  //   backgroundColor:'#FAFABE',
    flexDirection:"row",
    justifyContent: "flex-start",
    padding:15,
    paddingLeft:25,
    alignItems:'center'
  },
  logo:{
    height:50,
    width:50,
    borderRadius:25,
    backgroundColor:'#fff',
    borderColor:'#6a85a0',
    borderWidth:0.5,
    marginRight:25
  },
  Image:{
    height:50,
    width:50,
    resizeMode:'contain',
  },
  ImageR:{
    left:-5,
    height:60,
    width:60,
    resizeMode:'contain',
  },
  club:{
      flex:1,
    //   backgroundColor: '#DCEBFF',
  },
  clubTitle:{
      fontSize:20,
      fontWeight: '500',
      marginBottom: 8
  },
  clubChar:{
      fontSize: 14,
      color: '#828282'
  },
  button:{
    top:-40,
    margin:30,
    height:15,
    width:50,
    
  },
});