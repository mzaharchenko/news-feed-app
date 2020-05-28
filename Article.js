import React from 'react';
import auth from '@react-native-firebase/auth';
import { StyleSheet, View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import moment from 'moment';
import defaultImg from './images/news.jpg';

export default class Article extends React.Component {
  constructor(props) {
      super(props);
    }
  
  onPressHandler() {
    this.props.navigation.navigate('Detail', {article: this.props.article, navigation: this.props.navigation})
  }
  
  
  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;
    const { noteStyle } = styles;
    const time = moment(publishedAt || moment.now()).fromNow();

    return (
      <TouchableNativeFeedback
        onPress={() => this.onPressHandler()}
      >
        <Card
          image={{
            uri: urlToImage || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {title || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
            <Text style={noteStyle}>{time}</Text>
          </View>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
})