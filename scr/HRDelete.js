import React, {useState, useEffect, Component } from 'react';
import { render } from 'react-dom';
import { 
    Text,
    View,  
    ActivityIndicator, 
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    Image
} from 'react-native';
import bg from '../assets/bg.jpg';
import CEO from '../assets/thumbnails/CEO.png';
import COO from '../assets/thumbnails/COO.png';
import CFO from '../assets/thumbnails/CFO.png';
import CMO from '../assets/thumbnails/CMO.png';
import CTO from '../assets/thumbnails/CTO.png';
import PRES from '../assets/thumbnails/PRES.png';
import VPRES from '../assets/thumbnails/VPRES.png';
import EASSI from '../assets/thumbnails/EASSI.png';
import OMAN from '../assets/thumbnails/OMAN.png';
import EMAN from '../assets/thumbnails/EMAN.png';
import ACC from '../assets/thumbnails/ACC.png';
import OFMAN from '../assets/thumbnails/OFMAN.png';
import RECEP from '../assets/thumbnails/RECEP.png';
import SUPER from '../assets/thumbnails/SUPER.png';
import MMAN from '../assets/thumbnails/MMAN.png';
import PMAN from '../assets/thumbnails/PMAN.png';
import MANAGER from '../assets/thumbnails/MANAGER.png';
import PROFSTAF from '../assets/thumbnails/PROFSTAF.png';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default class HRDelete extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            customerID:''
        }
        this.state = { 
            isLoading: true,
            dataSource:[],
            isFetching:false
          }
    }

/*------------------------------------------------------------------------------*/
    DeleteRecord=()=>
    {
        var employeeID=this.state.employeeID;

        if(employeeID.length==0)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var InsertAPIURL = "http://10.0.2.2:80/HR/delete.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                employeeID:employeeID
            };

            fetch(InsertAPIURL,
                {
                    method:'POST',
                    headers:headers,
                    body: JSON.stringify(Data)
                }
                )
                .then((response)=>response.json())
                .then((response)=>
                {
                    alert(response[0].Message);
                    this.componentDidMount();
                })
                .catch((error)=>
                {
                    alert("Error"+error);
                })

        }
    }
/*------------------------------------------------------------------------------*/

componentDidMount = async() => {
    this.setState({ isLoading: true });
    try {  
     const responseJson = await fetch('http://10.0.2.2:80/HR/displayall.php')
     const json = await responseJson.json();
        this.setState({
          isLoading: false,
          dataSource: json
        })  
    } catch(error) { 
        console.log(error);
        this.setState({ isLoading: false });
    }
  }

  onRefresh() {
    this.setState({isFetching: true,},() => {this.componentDidMount();});
    this.setState({ isFetching: false })
}

_renderItem = ({ item }) => {

    thumbnail = item.job;
   
    const job = [
      CEO ,
      COO ,
      CFO ,
      CMO ,
      CTO ,
      PRES ,
      VPRES ,
      EASSI ,
      OMAN ,
      EMAN ,
      ACC ,
      OFMAN ,
      RECEP ,
      SUPER ,
      MMAN ,
      PMAN ,
      MANAGER ,
      PROFSTAF];
   
   var e;
   var thumbnail;
   
   if ( thumbnail == 'Chief Executive Officer (CEO)'){e=0;}
   if ( thumbnail == 'Chief Operating Officer (COO)'){e=1;}
   if ( thumbnail == 'Chief Financial Officer (CFO)'){e=2;}
   if ( thumbnail == 'Chief Marketing Officer (CMO)'){e=3;}
   if ( thumbnail == 'Chief Technology Officer (CTO)'){e=4;}
   if ( thumbnail == 'President'){e=5;}
   if ( thumbnail == 'Vice President'){e=6;}
   if ( thumbnail == 'Executive Assistant'){e=7;}
   if ( thumbnail == 'Operations manager'){e=8;}
   if ( thumbnail == 'Environmental manager'){e=9;}
   if ( thumbnail == 'Accountant'){e=10;}
   if ( thumbnail == 'Office manager'){e=11;}
   if ( thumbnail == 'Receptionist'){e=12;}
   if ( thumbnail == 'Supervisor'){e=13;}
   if ( thumbnail == 'Marketing manager'){e=14;}
   if ( thumbnail == 'Purchasing manager'){e=15;}
   if ( thumbnail == 'Manager'){e=16;}
   if ( thumbnail == 'Professional Staff'){e=17;}
     
    return (<TouchableOpacity onPress={() => alert(item.body)}>
          <View>
          <View style={styles.item}>
            <Text style={styles.text}>EmployeeID#: {item.employeeID}{'\n'}Name: {item.lastName}, {item.firstName}{'\n'}Branch:{item.branch}
            {'\n'}Job: {item.job}{'\n'}Position: {item.position}{'\n'}Salary: ₱{item.salary}</Text>
          </View>
          <Image style= {styles.thumbnail}source={job[e]}/>
          </View>
      </TouchableOpacity>
   );}

/*------------------------------------------------------------------------------*/
    render()
    {
        if (this.state.isLoading) {
            return (
              <View style={styles.container}>
                <ActivityIndicator size="large" animating/>
              </View>
            )
          }
          else{
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
        top: 65,
        left: 8,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> HUMAN RESOURCES </Text> 

<Text style={{
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 110,
        left: 13,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> DATA REMOVEMENT </Text>           

                
        <View style= {{ flexDirection: 'row', justifyContent: 'space-evenly', top: 145}}>

            <TextInput
                placeholder={"Enter Employee ID#"}
                placeholderTextColor={"#000000"}
                keyboardType={"numeric"}
                style={styles.txtStyle}
                onChangeText={employeeID=>this.setState({employeeID})}
            />
        <TouchableOpacity
                    onPress={() => this.DeleteRecord()}>
                    <Text style={styles.button}>DELETE</Text>
    </TouchableOpacity>
        </View>

            <SafeAreaView style={styles.container}>     
                   <FlatList
                      style={{ width: '100%', borderRadius:20}}
                      data={ this.state.dataSource }
                      onRefresh={() => this.onRefresh()}
                      refreshing={this.state.isFetching}        
                      renderItem={this._renderItem}
                      keyExtractor={(item, index) => index.toString()}
                    />                
            </SafeAreaView>
        </ImageBackground>
        </View>
    );
    }
}
}

const styles=StyleSheet.create({


    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'black',
        backgroundColor: 'white',
        padding: 10,
        width: 232
    },
      
    container :{
        alignItems:'center',
        backgroundColor: '#F5FCFF',
        textAlign: 'center',
        top:160,
        height: '63%',
        width: '90%',
        left: '5%',
        },
       
    item:{
      borderBottomWidth:3,
      borderBottomColor: '#eee',
      width: '160%',
      padding :10,
      left: 90
        },
        
    text:{
      fontSize: 15,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      fontStyle: "italic",
        },
        
    thumbnail:{
          resizeMode: 'center',
          position: 'absolute',
          height: 70, 
          width: 90, 
          top: 30,
          left: 7,
        },
        
        button:{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: 100,
            backgroundColor: '#047cc4',
            fontSize: 15,
            height: 48,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: 3,
            paddingTop:14
        },



});

