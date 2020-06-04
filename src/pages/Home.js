
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,TextInput,Alert,Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { getWeather } from '../api/require.js'

class Home extends React.Component{

  constructor( props ){
    super(props)
    this.state = {
        movielist:[]
    }
  }

  componentDidMount(){

    getWeather().then( res => {
        this.setState({
            movielist:res
        })
    }).catch(err => {
        Alert.alert('hahahahhahaha')
    })
  }
  renderMovieList(){
    return this.state.movielist.map( item =>
        (<View key={item.id}>
            <Image source={{uri:item.url}} style={{width: 200, height: 100}}/>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
        </View>))
  }
  render (){
    return (
      <ScrollView>

            <Text>Some text111282</Text>
            <View>
              <Text>Some more text</Text>
                <Image source={{uri:"https://pics5.baidu.com/feed/8601a18b87d6277f66e5840ef2aade36e824fcaf.jpeg?token=b0d82e4f743f425cd3bb869518fb6326"}} style={{width: 193, height: 110}}/>
            </View>

            <Button onPress={()=>{this.props.navigation.navigate('MineScreen',{
                        userName:'Tory',
                        userMes:'Hello'
                      })}} title="跳转到Mine"
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1
              }}
              defaultValue="You can type in me"
            />
            { this.renderMovieList()}
          </ScrollView>

    )
  };
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Home;

