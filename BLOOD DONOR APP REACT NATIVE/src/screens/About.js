import React from 'react';
import { Text, View, StyleSheet, Linking, ScrollView } from 'react-native';
import { SocialIcon, Icon } from 'react-native-elements';
import News from '../components/News';

class About extends React.Component {
  render() {
    const data = this.props.navigation.getParam('data', null);
    if (data) return <News data={data} />;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>MSF</Text>
        <Text style={styles.title2}>DEVELOPER </Text>
        <Text style={styles.about}>
         blood app
        </Text>
        <Text style={styles.title2}>WEb</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            onPress={() =>
              Linking.openURL('https://www.facebook.com')
            }
            color="#4267b2"
            reverse
            name="facebook"
            type="material-community"
          />
          <Icon
            onPress={() => Linking.openURL('https://')}
            reverse
            color="#0084ff"
            name="facebook-messenger"
            type="material-community"
          />
          <Icon
            onPress={() => Linking.openURL('123')}
            reverse
            color="orange"
            name="phone"
            type="material-community"
          />
        </View>
        <Text
          style={[
            styles.about,
            { fontSize: 16, marginTop: 40, marginBottom: 0 }
          ]}>
          Application developed by MSF
          {'\n'}
          MSF@gmail.com
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <SocialIcon
            onPress={() => Linking.openURL('https://github.com')}
            type="github"
          />
          <SocialIcon
            onPress={() => Linking.openURL('https://medium.com')}
            type="medium"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 26,
    color: '#43484d',
    marginBottom: 10
  },
  title2: {
    fontSize: 18,
    color: '#43484d'
  },
  about: {
    margin: 20,
    marginTop: 0,
    textAlign: 'center',
    color: '#5e6977'
  }
});

export default About;
