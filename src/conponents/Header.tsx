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

type HeaderName = {
  name: string;
};

const Header = (props: HeaderName) => {
  return (
    <View
      style={{height: 54, borderBottomColor: '#E4E4E4', borderBottomWidth: 1}}>
      <View
        style={{
          height: 54,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 13,
        }}>
        <Text style={{fontSize: 15, fontFamily: 'Pretendard'}}>
          {props.name}
        </Text>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            width: 39,
            marginTop: -10,
          }}>
          <Image
            source={require('AwesomeTSProject/assets/images/image7.png')}
            resizeMode="contain"
            style={{width: 24}}
          />
          <Text
            style={{
              fontSize: 10,
              marginTop: -6,
              fontFamily: 'Pretendard',
              alignItems: 'center',
            }}>
            공지사항
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
