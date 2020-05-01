import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'

const Logo = () => {
    return (
      <View>
        <Image source={{uri:'https://uilogos.co/img/logotype/foxhub.png'}} style={styles.Logocont}/>
      </View>

      )
}

const styles = StyleSheet.create({
  Logocont:{
    height:250,
    width:250,
    marginBottom: 30,
    
  },
});

export default Logo;
