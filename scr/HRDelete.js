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
    ImageBackground
} from 'react-native';
import bg from '../assets/bg.jpg';
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

 _renderItem = ({ item }) => (
     
    <TouchableOpacity onPress={() => alert(item.body)}>
            <View style={styles.item}>
              <Text style={styles.text}>EmployeeID#:{item.employeeID},{'\n'}LastName:{item.lastName},{'\n'}Branch:{item.branch}
              {'\n'}Job:{item.job},{'\n'}Position:{item.position},{'\n'}SalaryPerMonth:{item.salary}</Text>
            </View>
        </TouchableOpacity>
 );

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

                    
        <View style={styles.viewStyle}>
            <TextInput
                placeholder={"Enter Employee ID#"}
                placeholderTextColor={"#000000"}
                keyboardType={"numeric"}
                style={styles.txtStyle}
                onChangeText={employeeID=>this.setState({employeeID})}
            />
            <Button
                title={"Delete Record"}
                onPress={() => this.DeleteRecord()}
            />
            <SafeAreaView style={styles.container}>     
                   <FlatList
                      style={{padding: 10}}
                      data={ this.state.dataSource }
                      onRefresh={() => this.onRefresh()}
                      refreshing={this.state.isFetching}        
                      renderItem={this._renderItem}
                      keyExtractor={(item, index) => index.toString()}
                    />                
            </SafeAreaView>
        </View>
        </ImageBackground>
        </View>
    );
    }
}
}

const styles=StyleSheet.create({

    viewStyle:
    {
        padding:20,
        marginTop:100,
        top: '5%',
    },

    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'black',
        marginBottom: 30,
        backgroundColor: 'white',
        padding: 10
    },
      
    container :{
        alignItems:'center',
        backgroundColor: '#F5FCFF',
        textAlign: 'center',
        marginTop: 10,
        paddingTop: 10,
        top: 5,
        paddingBottom: 10,
        textAlign: 'center',
        height: 400,
        width: '100%'
        },

    item:{
        borderBottomWidth:3,
        borderBottomColor: '#eee',
        width: '150%',
        padding :10,
        left: 50
        },

    text:{
        fontSize: 15,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        }



});

