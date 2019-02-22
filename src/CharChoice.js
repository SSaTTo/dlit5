import React, {Component} from 'react';
import {StyleSheet, AsyncStorage, Text, View,  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import ConfirmButton from '../components/ConfirmButton';
import CharButton from '../components/CharButton';
import CharInput from '../components/CharInput';
import CharGoal from '../components/CharGoal';

export default class CharChoice extends React.Component {

  state = {
    char: []
  }

  componentDidMount = () => {
    AsyncStorage.getItem("chars").then(data => {
      const chars = JSON.parse(data || '[]');
      this.setState({ chars });
    });
  };

  removeChar = (index) => {
    let chars = [...this.state.chars]
    chars.splice(index,1)
    this.setState({
      chars: chars,
    })
  }

  addChar = (char) => {
     
    // 새로운 특성(char) 객체 생성
    const newChar = {
        id: Date.now(), // 등록시간
        text: char,      // 특성 내용
    }   
    // state 업데이트
    this.setState(prevState => {
      prevState.chars.push(newChar);
      return prevState;
      });
      
    // 콘솔창에 출력해보자~
    console.log(this.state.chars);
  }
  componentWillMount(){
    this.setState({
      text:'',
      chars:[],
    })
  }
  constructor(props) {
    super(props);
    this.state = { 
    text: '',  
    chars: [],
    };
    }
  clear = () => {
    this.setState({text:""})
  }
  
  render() {
    return (
      <>
      
      <KeyboardAvoidingView
      behavior="padding"
      >
      <ScrollView>
   
      <View style={styles.container}>
        <View style={styles.header} />

          {/* 제목 */}
          <View style={styles.title}>
              <Text style={styles.text_1}>특징선택</Text>
              <Text style={styles.text_2}>중복 선택 가능</Text>
          </View>

        {/* 샾버튼 모아놓은거 */}
        <View style={styles.content}>
            <CharButton title="#소규모" />
            <CharButton title="#꿀잼" />
            <CharButton title="#대규모" />
            <CharButton title="#편안한 분위기" />
            <CharButton title="#가족같은" />
            <CharButton title="#신나는" />
            <CharButton title="#조용한" />
            <CharButton title="#특이한" />
            <CharButton title="#소통" />
            <CharButton title="#음주가무" />
            <CharButton title="#활동적인" />
            <CharButton title="#야외활동" />
            <CharButton title="#이벤트" />
        </View>
        
            {/* 위에 샾버튼 클릭했을 때 생긴 샾버튼 들어가는 곳 */}
            <View style={styles.contain}>
                <CharGoal 
                    chars={this.state.chars}
                    removeChar={this.removeChar}/>
            </View>

                <CharInput addChar={this.addChar} />
            
        {/* 완료버튼 */}
        <View style={styles.footer}>
          <ConfirmButton
            style={styles.button}
            title={'선택완료'}/>
        </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
     
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    padding:10,
    paddingBottom:200,
    backgroundColor: "white",
  },
  header: {
    width:'100%',
    // backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'5%',
    flexDirection: "row",
    alignItems:"flex-end",
    // backgroundColor: '#9aa9ff',
    paddingLeft: 15
  },
  content: {
    
    // backgroundColor: '#d6ca1a',
    padding:15,
    paddingTop:30,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom:80
    
  },
  inputView:{
    width:'100%',
    height:110,
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop:30
  },
  footer: {
    width:'100%',
   
    // backgroundColor: '#1ad657',
    paddingTop: 50,
    justifyContent: 'flex-end',
    alignItems:'flex-end'
  },
  
  text_1: {
      fontSize: 25,
      color:"#0A6EFF",
      marginRight:3
  },
  text_2: {
      color: "#aaaaaa"
  },
  selectView:{
    flexDirection: "row",
    
  },
  STBT:{
   
    paddingLeft: 50,
    marginLeft:50,
  },
  AB:{
    backgroundColor:"red"
  },
  contain:{
    flexDirection: "row",
  
    flexWrap: "wrap"
  }
});