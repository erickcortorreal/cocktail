import React from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

interface Props {
  criteria: string;
  renderBackButton: () => Element | undefined;
  search: any;
}

const SearchBar = (props: Props) => {
  const {renderBackButton, criteria, search} = props;
  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 50,
        width: '95%',
        marginTop: 10,
        borderRadius: 10,
      }}>
      {renderBackButton()}
      <Icon.Button
        name="search"
        backgroundColor="#e6e6e6"
        color="gray"
        style={{
          backgroundColor: '#e6e6e6',
        }}
        size={15}>
        <TextInput
          style={{width: '60%'}}
          value={criteria}
          placeholder="Search"
          onChangeText={text => search(text)}
        />
      </Icon.Button>
      <TouchableOpacity onPress={() => search('')}>
        <Text
          style={{
            color: '#e64132',
          }}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
