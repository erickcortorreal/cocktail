import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';

interface Props {
  navigation: any;
}

export default class Home extends React.Component<Props> {
  onSearchClick = () => {
    this.props.navigation.push('CocktailFinder');
  };
  render() {
    return (
      <LinearGradient
        colors={['#e64132', '#c81492']}
        start={{x: 0.0, y: 1}}
        end={{x: 1, y: 0}}
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="cocktail" color="#fff" size={60} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Text style={{fontWeight: '900', color: '#fff', fontSize: 20}}>
            Coktail
          </Text>
          <Text style={{color: '#fff', fontSize: 20}}>Finder</Text>
        </View>

        <Icon.Button
          name="search"
          backgroundColor="#fff"
          color="#c81492"
          size={25}
          onPress={this.onSearchClick}>
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
              width: '80%',
              textAlign: 'center',
            }}>
            Search your favorite cocktail
          </Text>
        </Icon.Button>
      </LinearGradient>
    );
  }
}
