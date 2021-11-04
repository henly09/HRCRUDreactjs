import React, {Component } from 'react';

import { 
    StyleSheet, 
    Text,
    View, 
    TextInput,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import bg from '../assets/bg.jpg';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default class HRSearch extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            sex:'',
            branch:'',
            date_of_birth:'',
            age:'',
            email:'',
            contact_no:'',
            address:'',
            job:'',
            position:'',
            salary:''
        };
    }

    SearchRecord=()=>
    {
        var employeeID=this.state.employeeID;

        if(employeeID.length==0)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var SearchAPIURL="http://10.0.2.2:80/HR/search.php";

            var header={
                    'Accept':'application/json',
                    'Content-Type':'application/json'
            };

            var Data={
                employeeID:employeeID
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
                this.setState({firstName:response[0].firstName});
                this.setState({lastName:response[0].lastName});
                this.setState({sex:response[0].sex});
                this.setState({branch:response[0].branch});
                this.setState({date_of_birth:response[0].date_of_birth});
                this.setState({age:response[0].age});
                this.setState({email:response[0].email});
                this.setState({contact_no:response[0].contact_no});
                this.setState({address:response[0].address});
                this.setState({job:response[0].job});
                this.setState({position:response[0].position});
                this.setState({salary:response[0].salary});
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
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 65,
        left: 10,
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
        left: 15,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> DATABASE SEARCH SYSTEM </Text>

       


        <View style={styles.viewStyle}>
        <View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TextInput
                placeholder={"Enter Employee ID#"}
                placeholderTextColor={"#000000"}
                keyboardType={"numeric"}
                style={{
                    borderBottomWidth:1,
                    borderBottomColor:'#ffffff',
                    backgroundColor: 'white',
                    paddingLeft: 7,
                    height: 37,
                    width: '70%',
                    borderRadius: 5
                }}
                onChangeText={employeeID=>this.setState({employeeID})}
            />
           <TouchableOpacity
                    onPress={this.SearchRecord}>
                    <Text style={styles.randombutton}>SEARCH</Text>
    </TouchableOpacity>
        </View>

            <Text> </Text>
           
            <Text
            style={styles.txtStyle}
            > {"First Name: "+this.state.firstName} </Text> 
            <Text
            style={styles.txtStyle}
            > {"Last Name: "+this.state.lastName} </Text>
            <Text
            style={styles.txtStyle}
            > {"Sex: "+this.state.sex} </Text>
            <Text
            style={styles.txtStyle}
            > {"Branch: "+this.state.branch} </Text>
            <Text
            style={styles.txtStyle}
            > {"Date of Birth: "+this.state.date_of_birth} </Text>
            <Text
            style={styles.txtStyle}
            > {"Age: "+this.state.age} </Text>
            <Text
            style={styles.txtStyle}
            > {"Email: "+this.state.email} </Text>
            <Text
            style={styles.txtStyle}
            > {"Contact No#: "+this.state.contact_no} </Text>
            <Text
            style={styles.txtStyle}
            > {"Address: "+this.state.address} </Text>
            <Text
            style={styles.txtStyle}
            > {"Job: "+this.state.job} </Text>
             <Text
            style={styles.txtStyle}
            > {"Position: "+this.state.position} </Text>
            <Text
            style={styles.txtStyle}
            > {"Salary: "+this.state.salary} </Text>

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
        top: '15%',
        
    },

    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'#ffffff',
        marginBottom: 5,
        backgroundColor: 'white',
        padding: 7,
        borderRadius: 4
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