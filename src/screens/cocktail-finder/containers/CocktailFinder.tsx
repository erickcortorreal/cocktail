import React from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import {RootState} from '../../../store';
import {Cocktail} from '../../../types/cocktailFinderTypes';
import {search} from '../../../actions/cocktailFinderActions';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';
import {SearchBar, CocktailItem} from '../components';
interface StateProps {
  criteria: string;
  cocktails: Array<Cocktail>;
  loading: boolean;
}

interface DispatchProps {
  search: typeof search;
}
interface OwnProps {
  navigation: any;
}
type Props = StateProps & DispatchProps & OwnProps;

const mapState = (state: RootState) => ({
  criteria: state.cocktailFinder.criteria,
  cocktails: state.cocktailFinder.cocktails,
  loading: state.cocktailFinder.loading,
});

const mapDispatch = {
  search,
};

class CocktailFinder extends React.Component<Props> {
  renderBackButton = () => {
    if (!this.props.criteria) {
      return (
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <Icon name="arrow-left" color="black" size={25} />
        </TouchableOpacity>
      );
    }
  };
  render() {
    const {loading, cocktails} = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <LinearGradient
          colors={['#c81492', '#e64132']}
          start={{x: 0.0, y: 1}}
          end={{x: 1, y: 0}}
          style={{height: '100%', alignItems: 'center'}}>
          <SafeAreaView>
            <SearchBar
              search={this.props.search}
              renderBackButton={this.renderBackButton}
              criteria={this.props.criteria}
            />
            {loading && (
              <ActivityIndicator
                style={{margin: 10}}
                size="large"
                color="#fff"
              />
            )}

            <FlatList
              data={cocktails}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <CocktailItem name={item.name} imgURI={item.imgURI} />
              )}
            />
          </SafeAreaView>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }
}
export default connect(mapState, mapDispatch)(CocktailFinder);
