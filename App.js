// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

import * as React from 'react';
import { View, Text, Button, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import SideMenu from 'react-native-side-menu-updated';


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

export default function App() {
  return (
    <NavigationContainer>
    <SideMenu 
    openMenuOffset={180} 
    menu={<SideMenuBar/>} 
    bounceBackOnOverdraw={false}
    isOpen={false}
    allowOverlayPressPropagation={true}>
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { 
          position: 'absolute',
          backgroundColor: '#0f7cc3',
          borderRadius: 10,
          height: 65,
          width: "98%",
          left: 5,
          bottom: 5
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
    </NavigationContainer>
    
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
    
    <TouchableOpacity onPress={() => alert('Page not available!')}>
    <Text style={styles.sidemenunav}>CONTACT</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => alert('Page not available!')}>
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

const styles = StyleSheet.create({
  
  sidemenunav: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color:'white',
    width: '80%',
    paddingTop: 20
  }
  
  })
