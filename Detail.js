import React from 'react'
import auth from '@react-native-firebase/auth';
import { StyleSheet, Platform, View, BackHandler, Linking, Button } from 'react-native'
import { Text, Card, Divider,Image } from 'react-native-elements';
import moment from 'moment';
import defaultImg from './images/news.jpg';

export default class Detail extends React.Component {
	constructor(props) {
      super(props);
	  this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
	
	componentDidMount() {
	    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}


	handleBackButtonClick() {
		this.props.navigation.goBack(null);
	    return true;
	}
	
	render() {
		const {
			title,
	      description,
	      publishedAt,
	      source,
	      urlToImage,
		  url
	  } = this.props.navigation.state.params.article;
	  const { noteStyle } = styles;

	  const time = moment(publishedAt || moment.now()).fromNow();
		const imageUri = urlToImage || defaultImg
		return (
	      <View style={{margin: 5}}>
			  <Image source={{uri: imageUri}} style={{ width: '100%', height: 200 }} />
			  <View
				style={{ flexDirection: 'row', justifyContent: 'space-between' }}
			  >
				<Text style={noteStyle}>{source.name.toUpperCase()}</Text>
				<Text style={noteStyle}>{time}</Text>
			  </View>
				
				<Text style={{ marginBottom: 10, fontWeight: 'bold'}}>
				  {title || ''}
				</Text>
				
				<Divider style={{ backgroundColor: '#dfe6e9' }} />
				<Text>
					{description || ''}
				</Text>
				<View>
					<Button title="Read more" onPress={() => Linking.openURL(url)} color='tomato'/>
				</View>
	      </View>
	    )
  	}
}


const styles = StyleSheet.create({
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 12
  },
})