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
import Scroll from './Scroll';

const Middle = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFF',
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flex: 0.7,
              marginLeft: 15,
            }}>
            <Text style={styles.fontMyPayMain}>내 관리비</Text>
          </View>
          <View style={{marginBottom: 0}}>
            <View style={styles.longBar}>
              <Text style={styles.fontMyPaySub}>미납 관리비</Text>
              <Text style={styles.fontMyPaySub}>총 200,000원</Text>
            </View>
            <View style={styles.longBar}>
              <Text style={styles.fontMyPaySub}>잔액</Text>
              <Text style={styles.fontMyPaySub}>1,000,000원</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.6,
          }}>
          <View style={{marginLeft: 20, marginTop: -20}}>
            <Text style={styles.fontMyPayMain}>납부 내역</Text>
          </View>
          <View style={{marginLeft: 5, marginTop: 15}}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              <Scroll month="1월" set={true} />
              <Scroll month="2월" set={true} />
              <Scroll month="3월" set={true} />
              <Scroll month="4월" set={false} />
              <Scroll month="5월" set={false} />
              <Scroll month="6월" set={false} />
              <Scroll month="7월" set={false} />
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            flex: 1.3,
          }}>
          <View style={{marginLeft: 20}}>
            <Text style={styles.fontMyPayMain}>납부 관리</Text>
          </View>
          <View style={styles.bigBox}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: -14,
              }}>
              <Text style={styles.fontMyPaySub}>이체방법</Text>
              <Text
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: 14,
                  color: '#FFFDFD',
                  marginRight: -190,
                }}>
                자동 이체
              </Text>
              <Image
                source={require('AwesomeTSProject/assets/images/image6.png')}
                style={{width: 14}}
                resizeMode="contain"
              />
            </View>
            <View style={styles.betweenText}>
              <Text style={styles.fontMyPaySub}>자동 이체 계좌</Text>
              <Text style={styles.fontMyPaySub}>9003-2230-2574-7</Text>
            </View>
            <View style={styles.betweenText}>
              <Text style={styles.fontMyPaySub}>수취인</Text>
              <Text style={styles.fontMyPaySub}>최태성</Text>
            </View>
            <View style={styles.betweenText}>
              <Text style={styles.fontMyPaySub}>자동 이체일</Text>
              <Text style={styles.fontMyPaySub}>21일</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  longBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0B75F2',
    height: 53,
    paddingLeft: 18,
    paddingRight: 18,
    marginLeft: 14,
    marginRight: 17,
    marginTop: 14,
    borderRadius: 15,
  },
  fontMyPaySub: {
    fontFamily: 'Pretendard',
    fontSize: 14,
    color: '#FFFDFD',
  },
  fontMyPayMain: {
    fontFamily: 'Pretendard',
    marginTop: 20,
    fontSize: 24,
    marginLeft: 10,
  },
  bigBox: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#0B75F2',
    margin: 14,
    height: 53,
    padding: 18,
    borderRadius: 15,
  },
  betweenText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Middle;
