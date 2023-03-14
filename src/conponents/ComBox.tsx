import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useState} from 'react';

import {Image} from 'react-native';

type ComBox = {
  case: number;
  comment: string;
  date: string;
};

const ComBox = (props: ComBox) => {
  const [state, setState] = useState([props.case]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
        backgroundColor: '#539CF1',
        marginTop: 15,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 16, fontFamily: 'Pretendard'}}>
          {props.comment}
        </Text>
        <Text style={{fontSize: 12, fontFamily: 'Pretendard'}}>
          {props.date.substring(0, 4)}-{props.date.substring(5, 6)}-
          {props.date.substring(7, 8)} 등록
        </Text>
      </View>
      <View>
        {props.case === 0 ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              width: 300,
            }}>
            <View style={{width: 32, height: 47, marginTop: 5}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  fontFamily: 'Pretendard',
                }}>
                접수
              </Text>
              <Image
                source={require('AwesomeTSProject/assets/images/Box2.png')}
                style={{width: 32, height: 32, resizeMode: 'contain'}}
              />
            </View>
            <View style={{width: 32, height: 47, marginTop: 5}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  fontFamily: 'Pretendard',
                }}>
                처리중
              </Text>
              <Image
                source={require('AwesomeTSProject/assets/images/Box1.png')}
                style={{width: 32, height: 32, resizeMode: 'contain'}}
              />
            </View>
            <View style={{width: 32, height: 47, marginTop: 5}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  fontFamily: 'Pretendard',
                }}>
                완료
              </Text>
              <Image
                source={require('AwesomeTSProject/assets/images/Box1.png')}
                style={{width: 32, height: 32, resizeMode: 'contain'}}
              />
            </View>
          </View>
        ) : props.case === 1 ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              width: 300,
            }}>
            <View style={{width: 32, height: 47, marginTop: 5}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  fontFamily: 'Pretendard',
                }}>
                접수
              </Text>
              <Image
                source={require('AwesomeTSProject/assets/images/Box2.png')}
                style={{width: 32, height: 32, resizeMode: 'contain'}}
              />
            </View>
            <View style={{width: 32, height: 47, marginTop: 5}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  fontFamily: 'Pretendard',
                }}>
                처리중
              </Text>
              <Image
                source={require('AwesomeTSProject/assets/images/Box2.png')}
                style={{width: 32, height: 32, resizeMode: 'contain'}}
              />
            </View>
            <View style={{width: 32, height: 47, marginTop: 5}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  fontFamily: 'Pretendard',
                }}>
                완료
              </Text>
              <Image
                source={require('AwesomeTSProject/assets/images/Box1.png')}
                style={{width: 32, height: 32, resizeMode: 'contain'}}
              />
            </View>
          </View>
        ) : props.case === 2 ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              width: 300,
            }}>
            <View style={{width: 32, height: 47, marginTop: 5}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  fontFamily: 'Pretendard',
                }}>
                접수
              </Text>
              <Image
                source={require('AwesomeTSProject/assets/images/Box3.png')}
                style={{width: 32, height: 32, resizeMode: 'contain'}}
              />
            </View>
            <View style={{width: 32, height: 47, marginTop: 5}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  fontFamily: 'Pretendard',
                }}>
                처리중
              </Text>
              <Image
                source={require('AwesomeTSProject/assets/images/Box3.png')}
                style={{width: 32, height: 32, resizeMode: 'contain'}}
              />
            </View>
            <View style={{width: 32, height: 47, marginTop: 5}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  fontFamily: 'Pretendard',
                }}>
                완료
              </Text>
              <Image
                source={require('AwesomeTSProject/assets/images/Box3.png')}
                style={{width: 32, height: 32, resizeMode: 'contain'}}
              />
            </View>
          </View>
        ) : (
          <Text>잘 못 적음</Text>
        )}
      </View>
    </View>
  );
};

export default ComBox;
