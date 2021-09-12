import React, {useState, useEffect, Component } from 'react';
import { render } from 'react-dom';
import { 
    StyleSheet, 
    Text,
    View, 
    TextInput,
    Button,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import hotel from '../assets/hotel.png';
import bg from '../assets/bg.jpg';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default class HotelSearch extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            fullname:'',
            Type_:'',
            sex:'',
            date_of_birth:'',
            phone_num:'',
            email:'',
            address:'',
            room_num:'',
            room_type:'',
            no_of_occupants:'',
            reservID:'',
            arrival_date:'',
            departure_date:''
        };
    }

    SearchRecord=()=>
    {
        var customerID=this.state.customerID;

        if(customerID.length==0)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var SearchAPIURL="http://10.0.2.2:80/Hotel/search.php";

            var header={
                    'Accept':'application/json',
                    'Content-Type':'application/json'
            };

            var Data={
                customerID:customerID
            };

            fetch(
                SearchAPIURL,
                {
                    method:'POST',
                    headers:header,
                    body: JSON.stringify(Data)
                }
            )
            .then((response)=>response.json())
            .then((response)=>{
                this.setState({fullname:response[0].fullname});
                this.setState({Type_:response[0].Type_});
                this.setState({sex:response[0].sex});
                this.setState({date_of_birth:response[0].date_of_birth});
                this.setState({phone_num:response[0].phone_num});
                this.setState({email:response[0].email});
                this.setState({address:response[0].address});
                this.setState({room_num:response[0].room_num});
                this.setState({room_type:response[0].room_type});
                this.setState({no_of_occupants:response[0].no_of_occupants});
                this.setState({reservID:response[0].reservID});
                this.setState({arrival_date:response[0].arrival_date});
                this.setState({departure_date:response[0].departure_date});
                
            })
            .catch((error)=>{
                alert("Error"+error);
            })
        }
    }
    render()
    {
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
        fontSize: 40,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 55,
        left: 8,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> HOTEL </Text> 

<Text style={{
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 100,
        left: 13,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> DATABASE SEARCH SYSTEM </Text>

         <Image 
         source= {hotel}
         style={{ 
         height: 120,
         width: 120,
         position: 'absolute',
         alignSelf:'flex-end',
         top: 30,
         resizeMode: 'center',
         }}/>


        <View style={styles.viewStyle}>
        <View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TextInput
                placeholder={"Enter Customer ID#"}
                placeholderTextColor={"#000000"}
                keyboardType={"numeric"}
                style={{
                    borderBottomWidth:1,
                    borderBottomColor:'#ffffff',
                    backgroundColor: 'white',
                    paddingLeft: 7,
                    height: 37,
                    width: '70%'
                }}
                onChangeText={customerID=>this.setState({customerID})}
            />
           <TouchableOpacity
                    onPress={this.SearchRecord}>
                    <Text style={styles.randombutton}>SEARCH</Text>
    </TouchableOpacity>
        </View>

            <Text> </Text>
           
            <Text
            style={styles.txtStyle}
            > {"Name: "+this.state.fullname} </Text> 
            <Text
            style={styles.txtStyle}
            > {"Type: "+this.state.Type_} </Text>
            <Text
            style={styles.txtStyle}
            > {"Sex: "+this.state.sex} </Text>
            <Text
            style={styles.txtStyle}
            > {"Birthday: "+this.state.date_of_birth} </Text>
            <Text
            style={styles.txtStyle}
            > {"Phone Number: "+this.state.phone_num} </Text>
            <Text
            style={styles.txtStyle}
            > {"Email: "+this.state.email} </Text>
            <Text
            style={styles.txtStyle}
            > {"Address: "+this.state.address} </Text>
            <Text
            style={styles.txtStyle}
            > {"RoomNum#: "+this.state.room_num} </Text>
            <Text
            style={styles.txtStyle}
            > {"Room Type: "+this.state.room_type} </Text>
            <Text
            style={styles.txtStyle}
            > {"No of Occupants: "+this.state.no_of_occupants} </Text>
             <Text
            style={styles.txtStyle}
            > {"Reservation ID: "+this.state.reservID} </Text>
            <Text
            style={styles.txtStyle}
            > {"Arrival: "+this.state.reservID} </Text>
            <Text
            style={styles.txtStyle}
            > {"Departure: "+this.state.departure_date} </Text>


        </View>
        </ImageBackground>
        </View>
    )
    }
}

const styles=StyleSheet.create({

    viewStyle:
    {
        flex:1,
        padding:20,
        marginTop:20,
        top: '13%',
        
    },

    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'#ffffff',
        marginBottom: 5,
        backgroundColor: 'white',
        padding: 7,
    },

    randombutton:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 100,
        marginBottom: 10,
        backgroundColor: '#2494f4',
        fontSize: 14.5,
        height: 38,
        textAlign: 'center',
        paddingTop: 8,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 3    
    },
   



});