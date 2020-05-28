import React from 'react'
import auth from '@react-native-firebase/auth';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import profileImg from './images/user.jpg';

export default class Profile extends React.Component {

	state = { currentUser: null }
	
	constructor(props) {
      super(props);
      this.state = { currentUser: null };
    }
	
	componentDidMount() {
	    const { currentUser } = auth()
	    this.setState({ currentUser })
	}

	 handleLogout = () => {
	    const { email, password } = this.state
	      auth()
	      .signOut()
	      .then(() => this.props.navigation.navigate('Login'))
	      .catch(error => this.setState({ errorMessage: error.message }))
	  }
	  
	render() {
	    const { currentUser } = this.state
		return (
	      <View style={styles.container}>
		  <Image source={profileImg} style={{ width: 200, height: 200 }} />
	        <Text style={{marginBottom: 20}}>
	          Hi {currentUser && currentUser.email}!
	        </Text>
	      <Button title="Logout" onPress={this.handleLogout} color='tomato'/>
	      </View>
	    )
  	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})