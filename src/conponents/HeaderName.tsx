import {useLinkProps} from '@react-navigation/native';
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

const HeaderName = (props: HeaderName) => {
  return (
    <Text style={{fontSize: 15, fontFamily: 'Pretendard'}}>{props.name}</Text>
  );
};
