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

const MenuBar = () => {
  return (
    <View
      style={{
        borderTopColor: '#E4E4E4',
        borderTopWidth: 1,
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('AwesomeTSProject/assets/images/image5.png')}
          resizeMode="contain"
          style={{width: 32, marginTop: 20}}
        />
        <Text style={styles.fontMyPaySub}>홈</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('AwesomeTSProject/assets/images/image4.png')}
          resizeMode="contain"
          style={{width: 43, marginTop: 20}}
        />
        <Text style={styles.fontMyPaySub}>주차관리</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('AwesomeTSProject/assets/images/image3.png')}
          resizeMode="contain"
          style={{width: 32, marginTop: 20}}
        />
        <Text
          style={{
            fontFamily: 'Pretendard',
            fontSize: 14,
            paddingTop: 0,
            marginBottom: 1,
          }}>
          관리비
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('AwesomeTSProject/assets/images/image2.png')}
          resizeMode="contain"
          style={{width: 32, marginTop: 20}}
        />
        <Text style={styles.fontMyPaySub}>민원</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('AwesomeTSProject/assets/images/image1.png')}
          resizeMode="contain"
          style={{width: 32, marginTop: 20}}
        />
        <Text style={styles.fontMyPaySub}>마이페이지</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  fontMyPaySub: {
    fontFamily: 'Pretendard',
    fontSize: 14,
    paddingTop: 0,
    marginBottom: 1,
    color: '#E4E4E4',
  },
});

export default MenuBar;
