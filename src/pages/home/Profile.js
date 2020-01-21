import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import logoPerson from '../../public/images/avatar.jpg';
import * as firebase from 'firebase';
import color from '../../config/Config';

export default class Profile extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Profile',
    };
  };
  state = {email: '', name: ''};

  componentDidMount() {
    const {email, name} = firebase.auth().currentUser;
    this.setState({email, name});
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    // console.log(User)
    return (
      <View style={styles.container}>
        <View style={{marginTop: 24, alignItems: 'center'}}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={logoPerson} />
          </View>
          <Text style={styles.name}>{this.state.name}</Text>
        </View>
        <View>
          <KeyboardAvoidingView>
            <View style={styles.form}>
              <View>
                <Text style={styles.inputTitle}>Nama Lengkap</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  value={this.state.name}
                  // onChangeText = {this.handleChange('name')}
                />
              </View>

              <View style={{marginTop: 32}}>
                <Text style={styles.inputTitle}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  value={this.state.email}
                  // onChangeText = {this.handleChange('email')}
                />
              </View>
              <TouchableOpacity
                style={styles.btnUser}
                onPress={this.changeProfil}>
                <Text
                  style={{
                    color: '#FFF',
                    fontWeight: '500',
                    fontSize: 15,
                  }}>
                  {' '}
                  Change Profile
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
            <Text
              style={{
                color: '#FFF',
                fontWeight: '500',
                fontSize: 15,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  avatarContainer: {
    shadowColor: color.primary,
    shadowRadius: 30,
    shadowOpacity: 0.4,
  },
  avatar: {
    width: 136,
    height: 136,
    borderRadius: 68,
  },
  name: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: '600',
  },
  form: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 50,
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: color.primary,
  },
  btnUser: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
    marginHorizontal: 50,
    borderRadius: 4,
    height: 32,
    marginTop: 30,
  },
  btnName: {
    color: 'red',
    fontSize: 20,
    fontWeight: '500',
  },
  button: {
    marginHorizontal: 100,
    backgroundColor: '#B03A2E',
    borderRadius: 4,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
