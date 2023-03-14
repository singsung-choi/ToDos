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

interface scrollType {
  month: string;
  set: boolean;
}

const Scroll = (props: scrollType) => {
  const [content, setContent] = useState([props.set]);

  return (
    <View>
      {props.set ? (
        <View
          style={{
            width: 75,
            height: 75,
            backgroundColor: '#0B75F2',
            marginLeft: 15,
            paddingTop: 10,
            borderRadius: 15,
            alignItems: 'center',
          }}>
          <Text style={{fontFamily: 'Pretendard', fontSize: 14}}>
            {props.month}{' '}
          </Text>
          <Image
            source={require('AwesomeTSProject/assets/images/image8.png')}
            resizeMode="contain"
            style={{width: 25, marginTop: 0}}></Image>
        </View>
      ) : (
        <View
          style={{
            width: 75,
            height: 75,
            backgroundColor: '#D9D9D9',
            marginLeft: 15,
            paddingTop: 10,
            borderRadius: 15,
            alignItems: 'center',
          }}>
          <Text style={{fontFamily: 'Pretendard', fontSize: 14}}>
            {props.month}
          </Text>
          <View
            style={{
              width: 51,
              height: 21,
              borderRadius: 10,
              backgroundColor: '#0B75F2',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Pretendard',
                fontSize: 10,
                color: '#FFFDFD',
              }}>
              납부하기
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  betweenText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Scroll;
