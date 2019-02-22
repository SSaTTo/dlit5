import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity,ImageBackground,Image} from 'react-native';
import ClubView from '../components/ClubView';
import ClubDiv from '../components/ClubDiv';
import { AntDesign } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { ListItem } from 'react-native-elements'
import ClubPicker from '../components/ClubPicker';

export default class FindClub extends React.Component {
  render() {
    return (
      <>
      <Header
      leftComponent={{ icon: 'keyboard-arrow-left', color: 'blue' }}
      centerComponent={{text:{fontSize:'200'}, text: '활동기록', style: { color: 'blue' } }}
      rightComponent={{ icon: 'search', color: 'blue' }}
      backgroundColor={"#fff"}
    />
      <View style={styles.container}>

        {/* 전체화면 스크롤 */}
        <ScrollView style={styles.scroll}>

          {/* 맨 위 d:Lite */}
          <ClubView
            clubTitle={'d:Lite'}
            clubChar={'동아리 관련 플랫폼'}/>

          {/* 대학교 이름과 동아리 종류 볼수있는 아이콘 */}
          <View style={styles.div}>
          <Image
            style={{height:'100%',width:'100%',resizeMode:'contain'}}
            source={require('../images/ulsan.jpg')}/>  
          </View>

          <View style={{width:160,  alignItems:'stretch'}}>
          <ClubPicker />
          </View>

          {/* 종류에 따라 동아리 구분 */}
          <ClubDiv
            menuTitle={'내 동아리'}
          />
          <ClubDiv
            menuTitle={'예술 공연'}
          />
          <ClubDiv
            menuTitle={'체육 구기'}
          />
          <ClubDiv
            menuTitle={'종교'}
          />

        </ScrollView>
        
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  scroll: {
    flex: 1,
    paddingTop: 10
  },
  div: {
    height:50,
    // backgroundColor:'#dcdcdc',
    paddingLeft:15,
    paddingTop:15,
    paddingRight:15,
    flexDirection: 'row',
   
    
  },
  school: {
    fontSize: 20,
    textAlign:'center',
    textAlignVertical: "center"
    
  }
});