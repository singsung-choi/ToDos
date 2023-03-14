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
import ComBody from '../conponents/ComBody';
import Scroll from '../conponents/Scroll';
import MenuBar from '../conponents/MenuBar';

const ComplaintsPage = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFF',
      }}>
      <Header name="민원" />
      <ComBody />
      <MenuBar />
    </View>
  );
};

export default ComplaintsPage;
