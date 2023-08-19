import { StyleSheet, View } from 'react-native';
import ImageSet from '../components/ImageSet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2EBBF',
  },
});

const ItemScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <ImageSet
        source={{ uri: item.photo_url }}
        title={item.name}
        subTitle={`Sample Foods : ${item.sample_foods}`}
        description={`Description : ${item.description}`}
        style={{ height: 150, width: 150 }}
      ></ImageSet>
    </View>
  );
};
export default ItemScreen;
