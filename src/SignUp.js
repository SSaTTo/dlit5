import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import ConfirmButton from '../components/ConfirmButton';
import ClubPicker from '../components/ClubPicker';
import ConfirmButtonN from '../components/ConfirmButtonN';
import { Avatar } from 'react-native-elements';
import { Header } from 'react-native-elements';


export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
          value1:'',
          value2:'',
          value3:'',
          value4:'',
          value5:'',
          value6:'',
          value7:'',
          value8:'',
        };
      }

  render() {
    return (
        <>

        <Header
      leftComponent={{ icon: 'keyboard-arrow-left', color: 'blue' }}
      centerComponent={{style:{fontSize:'500'}, text: '동아리 정보 입력', style: { color: 'blue' } }}
      backgroundColor={"#fff"}
    />
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.blank}>ㅁㅁㅁㅁ</Text>
        
            
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 이름</Text>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={(value1) => this.setState({value1})}
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 종류</Text>
                    <View style={{width:'100%'}}>
                        <ClubPicker />
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 소개</Text>
                    <TextInput 
                        style={[styles.input, styles.introduce]} 
                        multiline={true}
                        onChangeText={(value2) => this.setState({value2})}
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>이런 신입생 와라</Text>
                    <TextInput 
                        style={[styles.input, styles.introduce]} 
                        multiline={true}
                        onChangeText={(value3) => this.setState({value3})}
                        placeholder={"ex. 상큼한 새내기들 환영"}
                        placeholderTextColor={"#d1d1d1"}
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>연락 가능 연락처</Text>
                    <TextInput 
                        style={styles.input} 
                        multiline={true}
                        onChangeText={(value3) => this.setState({value3})}
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 로고</Text>
                    <Avatar
                        rounded
                        containerStyle={{flex:1, marginTop:20, marginLeft:50}}
                        size="large"
                        
                         icon= {{ name:'questioncircle'}}
                        
                        showEditButton
                        
                        />

                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 메인사진</Text>
                    <Avatar
                    size="large"
                    icon={{ name: 'questioncircle' }}
                    onPress={() => console.log("Works!")}
                    containerStyle={{flex: 1, marginTop:20, width:'100%'}}
                    showEditButton
                    />
                </View>
                <View style={styles.button}>
                     {(this.state.value1.length==0&&this.state.value2.length==0&&this.state.value3.length==0)?<ConfirmButtonN title={'확인'}/>:<ConfirmButton title={'확인'}/> }
                </View>
                
            
        </View>
        </ScrollView>
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
  
  input: {
    borderRadius:8,
    width:'100%',
    padding: 7,
    borderColor: "#b8e3ff",
    borderWidth: 1,
    fontSize: 17,
    marginTop: 5
  },
  text: {
      fontSize: 13
  },
  toDos: {
    alignItems: "center"
  },
  block: {
      paddingBottom: 30
  },
  introduce: {
      height: 120
  },
  button: {
      width:'100%',
      height:60,
      marginTop:30
  },
  blank: {
    fontSize: 20,
    color:'white'
  }
});
