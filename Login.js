// Login.js
import React from 'react';
import auth from '@react-native-firebase/auth';
import Logo from './Logo';
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity, ImageBackground } from 'react-native'
import background from './images/background.png';
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
   

  handleLogin = () => {
    const { email, password } = this.state
    if( this.state.email.trim() == '') {
      alert( "Please fill the Email" );
      return false;
   }
    if( this.state.password.trim() == '') {
      alert( "Please fill the password" );
      return false;
   } 
      auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
      
  }
  
  render() {
    
    return (
       <ImageBackground style={styles.container} source={background}>
        
          <View style={styles.logocontainer}>
              <Logo/> 
          </View>
            
            {this.state.errorMessage &&
              <Text style={{ color: 'red' ,fontSize:20, padding:15,width:'80%'}} >
                {this.state.errorMessage}
              </Text>}
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              
              
            />
            <TextInput
              secureTextEntry
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={this.handleLogin}
            
            >
              
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>  
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  logocontainer: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  
  textInput: {
    height: 45,
    width: '70%',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 8,
    marginBottom: 4,
    borderRadius: 15,
    fontWeight: "bold",
    backgroundColor:'rgba(204, 82, 15, 0.5)',
    opacity:0.7,

  },
  buttonStyle: {
    padding: 8,
    borderRadius:8,
    backgroundColor: 'rgba(231, 186, 1, 1);',
    marginTop:17,
    borderRadius:100,
    borderWidth:3,


  },
  buttonText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'#000',
    width: 120,
    height: 30,

    


  },

});

