import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Image} from 'react-native';
import Header from '../conponents/Header';
import MenuBar from '../conponents/MenuBar';
import MyPage_contents from '../conponents/MyPage_contents';

const MyPage = () => {
  return (
    <View style={{flex: 1}}>
      <Header name="마이페이지" />
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFF',
        }}>
        <View style={{flex: 4 / 12, backgroundColor: '#0B75F2'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginRight: 40,
            }}>
            <Text style={{fontSize: 28, marginTop: 15}}>김준우</Text>
            <Text style={{fontSize: 14, marginTop: 15}}>그린파크 501호</Text>
            <Text style={{fontSize: 14, marginTop: 15}}>
              BMW 320I 108라 8477
            </Text>
            <Text style={{fontSize: 14, marginTop: 15}}>
              2022-04-05 ~ 2022-04-15
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              width: 70,
              height: 80.75,
              marginLeft: 25,
              marginTop: 20,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('AwesomeTSProject/assets/images/icon_user.png')}></Image>
            </View>
            <View
              style={{
                width: 70,
                height: 27,
                marginTop: 16.25,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 8,
              }}>
              <Text style={{color: '#0B75F2'}}>내정보관리</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 3 / 12,
            backgroundColor: 'skyblue',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 37.5,
              marginRight: 37.5,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('AwesomeTSProject/assets/images/icon_car.png')}></Image>
              <Text>주차</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('AwesomeTSProject/assets/images/icon_wallet.png')}></Image>
              <Text>PAY</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('AwesomeTSProject/assets/images/icon_complaints.png')}></Image>
              <Text>민원</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 37.5,
              marginRight: 37.5,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('AwesomeTSProject/assets/images/icon_announcement.png')}></Image>
              <Text>공지사항</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('AwesomeTSProject/assets/images/icon_receipt.png')}></Image>
              <Text>자주 묻는 질문</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('AwesomeTSProject/assets/images/icon_building.png')}></Image>
              <Text>건물 정보</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 5 / 12, backgroundColor: 'cobaltblue'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginTop: 15}}>
              <MyPage_contents content="오늘 할 일" />
            </View>
            <MyPage_contents content="내일 할 일" />
            <MyPage_contents content="가위바위보" />
            <MyPage_contents content="가위바위보" />
            <MyPage_contents content="오늘 할 일" />
            <MyPage_contents content="가위바위보" />
            <MyPage_contents content="오늘 할 일" />
            <MyPage_contents content="오늘 할 일" />
          </ScrollView>
        </View>
      </View>
      <MenuBar />
    </View>
  );
};

export default MyPage;
