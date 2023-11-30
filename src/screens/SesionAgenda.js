import React, {useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Image} from 'react-native';

const SesionAgenda = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let items = Array.apply(null, Array(12)).map((v, i) => {
      return {
        id: i,
        src: 'https://unsplash.it/400/400?image=' + (i + 1)
      };
    });
    setDataSource(items);
  }, []);

  return (
    <View style={styles.container}>
      <View> 
      <FlatList
        data={dataSource}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.src}}
            />
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
      </View>
    </View>
  );
};
export default SesionAgenda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    justifyContent: 'center',
    allignItems:'center',
  },
  imageThumbnail: {
    height: 100,
  },
});