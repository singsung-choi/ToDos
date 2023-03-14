import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

type MyPage_content = {
  content: string;
};

const MyPage_contents = (props: MyPage_content) => {
  return (
    <View style={{height: 40, marginLeft: 25}}>
      <Text style={{fontSize: 16}}>{props.content}</Text>
    </View>
  );
};

export default MyPage_contents;
