import React from 'react'
import auth from '@react-native-firebase/auth';
import { StyleSheet, Platform, View, BackHandler, Linking } from 'react-native'
import { Text, Button, Card, Divider,Image } from 'react-native-elements';
import moment from 'moment';

export default class Detail extends React.Component {
	constructor(props) {
      super(props);
	  
	  
	  this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
	
	componentDidMount() {
	    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
		console.log(this.props.navigation.dangerouslyGetParent().state.routes );
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
	  const defaultImg =
	  'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';
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
				
				<Button title="Read more" onPress={() => Linking.openURL(url)}>
				
				</Button>
				
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