import { FlatList, StyleSheet, View } from 'react-native';
import ImageSet from '../components/ImageSet';
import Data from '../../src/data/data-001.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2EBBF',
  },
});

const RenderItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <ImageSet
        source={{ uri: item.photo_url }}
        title={item.name}
        style={{ height: 100, width: 100 }}
        onPress={onPress}
      />
    </View>
  );
};

const ListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RenderItem
            item={item}
            onPress={() => navigation.navigate('Item', { item })}
          />
        )}
      />
    </View>
  );
};

export default ListScreen;
