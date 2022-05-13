// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import SideMenu from 'react-native-side-menu-updated';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';

import fb from './assets/fb.png';
import google from './assets/google.png';
import insta from './assets/insta.png';
import twitter from './assets/twitter.png';

import HRInsert from './scr/HRInsert.js';
import HRSearch from './scr/HRSearch.js';
import HRDelete from './scr/HRDelete.js';
import HRList from './scr/HRList.js';

import hrloop from './assets/hrloop.gif';
import bg from './assets/bg.jpg';
import logo from './assets/logo.png';
import home from './assets/home.png';
import insert from './assets/insert.png';
import search from './assets/search.png';
import deleted from './assets/delete.png';
import list from './assets/list.png';
import bg2 from './assets/download.jpg';


function HomeScreen({ navigation }) {

  return (
    <View>
     <ImageBackground 
     source={bg} 
     resizeMode="cover" 
     style={{
       height: '100%',
       width: '100%'
     }}>

      <Text style={{
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        alignSelf:'center',
        top: 320,
        color: '#0f7cc3',
        textShadowColor:'white',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:5,
        textAlign: 'center'
      }}> SWIPE WIRE {"\n"} I.T SOLUTIONS </Text>

        <Text style={{
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        alignSelf:'center',
        top: 410,
        color: 'white',
        textShadowColor:'black',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:5,
        textAlign: 'center'
      }}> Human Resources Database System Management™ </Text>

        <Image 
         source= {logo}
         style={{ 
         height: 250,
         width: 250,
         position: 'absolute',
         alignSelf:'center',
         top: 100,
         resizeMode: 'stretch',
         }}/>

      <View style={{ 
        flexDirection: 'row', 
        top: '125%', 
        justifyContent: 'space-evenly',
        }}>

      <Button
        color="#0f7cc3"
        title={"Insert"}
        onPress={() => navigation.navigate('Insert')}
       
      />

      <Button
        color="#0f7cc3"
        title={"Search"}
        onPress={() => navigation.navigate('Search')}
       
      />

      <Button
        color="#0f7cc3"
        title={"Delete"}
        onPress={() => navigation.navigate('Delete')}
      />

      <Button
        color="#0f7cc3"
        title={"HR List"}
        onPress={() => navigation.navigate('List')}
      />

      </View>
      </ImageBackground>
        </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <SideMenu 
    openMenuOffset={180} 
    menu={<SideMenuBar/>} 
    bounceBackOnOverdraw={false}
    isOpen={false}
    allowOverlayPressPropagation={true}
    edgeHitWidth={160}>

    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { 
          position: 'absolute',
          backgroundColor: '#0f7cc3',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 65,
          width: "100%",
        },
        tabBarShowLabel: false,
        showElevation: true
      }}>

      <Tab.Screen name="HomeScreen" 
      component={HomeScreen}  
      options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={home}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#b8ada2' : 'white'
                }}
                />
              </View>
            ),
        }} />

      <Tab.Screen name="Insert" component={HRInsert}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={insert}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#b8ada2' : 'white'
                }}
                />
              </View>
            ),
        }}/>

      <Tab.Screen name="Search" component={HRSearch}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={search}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#b8ada2' : 'white'
                }}
                />
              </View>
            ),
        }}/>
      <Tab.Screen name="Delete" component={HRDelete}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={deleted}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#b8ada2' : 'white'
                }}
                />
              </View>
            ),
        }}/>

    
      <Tab.Screen name="List" component={HRList}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (    
              <View>
                <Image
                source={list}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#b8ada2' : 'white'
                }}
                />
              </View>
            ),
              
        }}/>
        
    </Tab.Navigator>
    </SideMenu>  
  );
}

function SideMenuBar(){
  const navigation = useNavigation();
  return(
<View>
<ImageBackground
                source={hrloop} 
                resizeMode='cover' 
                style={{
                height: '100%',
                width: '100%'
     }}> 
     <ImageBackground
                opacity={0.78} 
                source={bg2} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
     }}>

<Text
    style={{
      fontSize: 30,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      color:'white',
      left: 5,
      top: 100
    }}
    > MENU</Text>

  <View style={{
    top: 100,
    alignSelf: 'center',
    width: '100%',
    left: 15,
    paddingTop: 10
  }}>

    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}> 
    <Text style={styles.sidemenunav}>HOME</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Insert')}> 
    <Text style={styles.sidemenunav}>INSERT</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Search')}> 
    <Text style={styles.sidemenunav}>SEARCH</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Delete')}>
    <Text style={styles.sidemenunav}>DELETE</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('List')}>
    <Text style={styles.sidemenunav}>DATABASE LIST</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => ToastAndroid.show("Page Not Available!",ToastAndroid.SHORT)}>
    <Text style={styles.sidemenunav}>CONTACT</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => ToastAndroid.show("Page Not Available!",ToastAndroid.SHORT)}>
    <Text style={styles.sidemenunav}>SERVICES</Text>
    </TouchableOpacity>

  </View>

    
 <View style={{position: 'absolute',top: '74%'}}>        
         <Image 
         source= {logo}
         style={{ 
         height: 110,
         width: 110,
         left: 28,
         top:55,
         resizeMode: 'center',
         position: 'absolute'
         }}/>

    <Text style={{
      fontSize: 10,
      fontFamily: 'sans-serif',
      fontWeight:'normal',
      fontStyle: "italic",
      top: 150,
      left: 32,
      color: 'white',
      textShadowColor:'#0c0d0e',
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius:15,
      textAlign: 'center',
    }}>
      SWIPE WIRE™ SYSTEM{'\n'}SOLUTIONS
    </Text>
</View>
     </ImageBackground>
     </ImageBackground>
   </View>
);
}

export default function Main() {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={LoginScreen}/>
          <Stack.Screen name="HomeHalf" component={Slider}/>
          <Stack.Screen name="HomeSecond" component={App}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginScreen({navigation}) {
  
  const user = 'awtsgege';
  const pass = '123123';
  
  const [loginuser, setLoginuser] = useState('');
  const [loginpass, setLoginpass] = useState('');

  onLogin = async() => {
    if (user == loginuser && pass == loginpass){
      ToastAndroid.show("Login Successfully!",ToastAndroid.SHORT);
      console.log("user: "+loginuser +" "+"pass: "+loginpass);
      navigation.navigate("HomeHalf");
    }
    else{
      ToastAndroid.show("Username or Password is Invalid!",ToastAndroid.SHORT);
      console.log("user: "+loginuser +" "+"pass: "+loginpass);
    }
  }
    return (
      <View style={{position: 'absolute', height: '100%',width: '100%'}}>  
          <ImageBackground
                  source={hrloop} 
                  resizeMode='cover' 
                  style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
       }}/> 
      
        <Text style={styles.HRtext}> SWIPE WIRE {"\n"} I.T SOLUTIONS </Text>
  
          <Text style={styles.sysdat}> Human Resources Database System Management™ </Text>
  
          <Image 
           source= {logo}
           style={styles.logo}/>
  
           <View style={{alignSelf: 'center', justifyContent: 'center', top: 440,justifyContent: 'space-evenly' }}>
  
           <TextInput
                      placeholder={"Username:"}
                      placeholderTextColor={"white"}
                      style={styles.txtStyle}
                      onChangeText={loginuser=>setLoginuser(loginuser)}
                  />
  
            <TextInput
                      placeholder={"Password:"}
                      placeholderTextColor={"white"}
                      style={styles.txtStyle}
                      secureTextEntry={true}
                      onChangeText={loginpass=>setLoginpass(loginpass)}
                  />
  
           </View>
  
           <View style={{alignSelf: 'center', top: 465}}> 
        
           <TouchableOpacity onPress={onLogin}>
             <Text style={styles.loginbutton}>LOGIN</Text>
           </TouchableOpacity>
           </View> 
  
           <View style={{ 
          flexDirection: 'row', 
          top: '125%', 
          justifyContent: 'space-evenly',
          }}>

 <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/')}> 
          <Image source= {fb} style={styles.loginwith} />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => Linking.openURL('https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin')}> 
          <Image source= {google} style={styles.loginwith}/>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}> 
          <Image source= {insta} style={styles.loginwith}/>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/')}> 
          <Image source= {twitter} style={styles.loginwith}/>
  </TouchableOpacity>

          </View>
  
     
        </View>
    );
  }

function Slider({ navigation }) {

  const slides = [
    {
      key: 1,
      title: 'TRAINING AND DEVELOPMENT',
      text: 'Every good conversation starts with listening.',
      image: require('./assets/hrgif.gif'),
    },
    {
      key: 2,
      title: 'TRAINING JOB APPLICANTS',
      text: 'When people go to work, \n they shouldn’t have to leave their hearts at home',
      image: require('./assets/hrgif2.gif'),
    },
    {
      key: 3,
      title: 'SOCIAL ENVIRONMENT',
      text: 'In order to build a rewarding employee experience, you need to understand what matters most to your people.\n Review us on Google Play Store.',
      image: require('./assets/hrgif3.gif'),
    }
  ];
  
  const onCall = async() => {
     navigation.navigate('HomeSecond');
   }
  
  const  _renderItem = ({ item }) => {

      const bg = [styles.slider,styles.slider1,styles.slider2];

      var e;
       
      if ( item.title == 'TRAINING AND DEVELOPMENT'){e=0;}
      if ( item.title == 'TRAINING JOB APPLICANTS'){e=1;}
      if ( item.title == 'SOCIAL ENVIRONMENT'){e=2;}


     return (
       <View style={bg[e]}>
         <Text style={styles.title}>{item.title}</Text>
               <Image style={styles.image} source={item.image} />
         <Text style={styles.text}>{item.text}</Text>
       </View>
     );
   }
  
   const _renderNextButton = () => {
     return (
       <View style={styles.buttonCircle}>
         <Icon
           name="arrow-forward-outline"
           color="rgba(255, 255, 255, .9)"
           size={24}
         />
       </View>
     );
   };
   
   const _renderDoneButton = () => {
     return (
       <View style={styles.buttonCircle}>
         <Icon
           name="md-checkmark"
           color="rgba(255, 255, 255, .9)"
           size={24}
         />
       </View>
     );
   };
  
   return (
     <AppIntroSlider
       data={slides}
       renderItem={_renderItem}
       renderDoneButton={_renderDoneButton}
       renderNextButton={_renderNextButton}
       keyExtractor={(item, index) => index.toString()}
       dotClickEnabled={true}
       onDone={onCall}
     />
   );
  }

const styles = StyleSheet.create({
  
  sidemenunav: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color:'white',
    width: '80%',
    paddingTop: 20
  },

  title:{
    alignSelf: 'center',
    top:140,
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontStyle: "italic",
    textAlign: 'center',
    color: 'white'
  },

  slider: {
    height: '100%',
    width: '100%',
    backgroundColor: '#5a6973',
    position: 'absolute'
  },

  slider1: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1c5c74',
    position: 'absolute'
  },

  slider2: {
    height: '100%',
    width: '100%',
    backgroundColor: '#5c9cec',
    position: 'absolute'
  },

  text:{
    alignSelf: 'center',
    top: 180,
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontStyle: "italic",
    textAlign: 'center',
    color: 'white'
  },

  image: {
   resizeMode: 'cover',
   height: 250,
   width: 250,
   alignSelf: 'center',
   top: '20%',
  },

  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: { 
    height: 220,
    width: 220,
    position: 'absolute',
    alignSelf:'center',
    top: 60,
    resizeMode: 'center',
    },

  sysdat: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontStyle: "italic",
    position: 'absolute',
    alignSelf:'center',
    top: 355,
    color: 'white',
    textShadowColor:'#0c0d0e',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:15,
    textAlign: 'center'
  },

  HRtext: {
    fontSize: 35,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontStyle: "italic",
    position: 'absolute',
    alignSelf:'center',
    top: 265,
    color: 'white',
    textShadowColor:'#0c0d0e',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:15,
    textAlign: 'center',
  },
  
  txtStyle: {
    fontSize: 14,
    backgroundColor: '#2ca4dc',
    height: 45,
    padding: 10,
    width: 280,
    marginBottom: 10,
    borderBottomColor: 'white',
    borderRadius: 10,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'white'
  },

  loginbutton: {
    fontSize: 14,
    backgroundColor: '#2a59a8',
    height: 45,
    padding: 10,
    width: 280,
    marginBottom: 10,
    borderBottomColor: 'white',
    borderRadius: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },

  loginwith: {
    height: 55,
    width: 55
  }
  
  })
