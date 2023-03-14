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
import Middle from '../conponents/PayBody';
import Scroll from '../conponents/Scroll';
import Menubar from '../conponents/MenuBar';

const PayPage = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFF',
      }}>
      <Header name='관리비' />
      <Middle />
      <Menubar />
    </View>
  );
};

export default PayPage;
