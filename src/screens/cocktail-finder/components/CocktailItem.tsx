import React from 'react';
import {Text, View, Image} from 'react-native';

interface Props {
  name: string;
  imgURI: string;
}
const CocktailItem = (props: Props) => {
  const {name, imgURI} = props;
  return (
    <View
      style={{
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 75, height: 75, borderRadius: 75}}
        source={{
          uri: `${imgURI}/preview`,
        }}
      />
      <Text style={{marginLeft: 20, color: 'gray', fontSize: 25}}>{name}</Text>
    </View>
  );
};

export default CocktailItem;
