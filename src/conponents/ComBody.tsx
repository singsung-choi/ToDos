import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Image} from 'react-native';
import Bottom from './MenuBar';
import Top from './Header';
import Scroll from './Scroll';
import {Children} from 'react';
import ComBox from './ComBox';

const ComBody = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFF',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginLeft: 25,
          marginRight: 15,
          marginTop: 20,
          marginBottom: -5,
          height: 40,
        }}>
        <Text style={{fontSize: 24, fontFamily: 'Pretendard'}}>
          처리중인 민원
        </Text>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            backgroundColor: '#0B75F2',
            height: 26,
            width: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontFamily: 'Pretendard', fontSize: 14}}>
            민원 등록
          </Text>
        </TouchableOpacity>
      </View>

      <ComBox case={0} comment={'세탁기가 고장났어요.'} date={'20220117'} />
      {/** 0=>처리, 1=>처리중, 2=>완료 */}
      <ComBox case={0} comment={'세탁기가 고장났어요.'} date={'20220117'} />
      <ComBox case={1} comment={'세탁기가 고장났어요.'} date={'20220117'} />
      <View>
        <Text
          style={{
            alignItems: 'center',
            fontSize: 24,
            marginLeft: 25,
            marginRight: 15,
            marginTop: 10,
            marginBottom: -5,
            height: 40,
          }}>
          해결한 민원
        </Text>
      </View>
      <ComBox case={2} comment={'세탁기가 고장났어요.'} date={'20220117'} />
      <ComBox case={2} comment={'세탁기가 고장났어요.'} date={'20220117'} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontFamily: 'Pretendard',
    borderRadius: 8,
  },
});

export default ComBody;
