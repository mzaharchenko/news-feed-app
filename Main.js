import React from 'react'
import auth from '@react-native-firebase/auth';
import { StyleSheet, Platform, Text, View, Button, FlatList } from 'react-native'

import { getNews } from './news';
import Article from './Article';


export default class Main extends React.Component {

	state = { currentUser: null }
	
	constructor(props) {
      super(props);
      this.state = { articles: [], refreshing: true, currentUser: null, currentPage: 1};
      this.fetchNews = this.fetchNews.bind(this);
    }
	
	componentDidMount() {
	    const { currentUser } = auth()
	    this.setState({ currentUser })
		this.fetchNews();
	}

	fetchNews() {
		getNews()
		  .then(articles => this.setState({ articles, refreshing: false }))
		  .catch(() => this.setState({ refreshing: false }));
	}

	handleReachEnd() {
		let currentPage = this.state.currentPage + 1;
		let currentArticles = this.state.articles;
		getNews(currentPage, 5)
			.then(articles => this.setState({ articles: currentArticles.concat(articles) }))
			
		this.setState({currentPage: currentPage})
	}

	handleRefresh() {
		this.setState(
		  {
		    refreshing: true,
			currentPage: 1
		  },
		  () => this.fetchNews()
		);
	}
	
	render() {
	    const { currentUser } = this.state
		return (
		  <View style={{flex:1}}>
		  	<View style={{flex:1.6}}>
			  <FlatList
		        data={this.state.articles}
		        renderItem={({ item }) => <Article article={item} navigation={this.props.navigation} />}
		        keyExtractor={item => item.url}
		        refreshing={this.state.refreshing}
		        onRefresh={this.handleRefresh.bind(this)}
				onEndReached={this.handleReachEnd.bind(this)}
				onEndReachedThreshold={0.6}
		      />
			  </View>
			  <View style={{flex:0.1}}>
			  	<Button title="Profile" onPress={() => {this.props.navigation.navigate('Profile')} }/>
			  </View>
		 </View>
	    )
  	}
}