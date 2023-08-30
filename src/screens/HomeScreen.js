import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageSet from '../components/ImageSet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2EBBF',
  },
  btnView: {
    width: 200,
    backgroundColor: '#F3B562',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 10,
    alignItems: 'center',
  },
  btnTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5C4B51',
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageSet
        source={require('../img/IMG_4174.jpg')}
        title="Jirapat Phosoi"
        subTitle="6421604781"
        style={{ height: 150, width: 150 }}
      ></ImageSet>
      <ImageSet
        source={{
          uri: 'https://www.kidjarak.com/wp-content/uploads/2022/10/netero-facts-03.jpg',
        }}
        title="Isaac Netero"
        subTitle="Hunter x Hunter"
        style={{ height: 150, width: 150 }}
      ></ImageSet>
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.btnTitle}>Let's get started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
