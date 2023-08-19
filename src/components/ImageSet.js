import { Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: '#000',
  },
  imgTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imgSubTitle: {
    color: '#666',
  },
});

const ImageSet = ({ source, onPress, style, title, subTitle, description }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
      <Image source={source} style={[style, styles.image]} />
      <Text style={styles.imgTitle}>{title}</Text>
      <Text style={styles.imgSubTitle}>{subTitle}</Text>
      <Text style={styles.imgSubTitle}>{description}</Text>
    </TouchableOpacity>
  );
};
export default ImageSet;
