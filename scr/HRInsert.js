import React,{Component,useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground} from 'react-native';
import bg from '../assets/bg.jpg';
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-datepicker';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default class HRInsert extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            sex:'',
            branch:'',
            age:'',
            email:'',
            contact_no:'',
            address:'',
            job:'',
            position:'',
            salary:'',
            date:''
        };
    }
   

    InsertRecord=()=>
    {
        var firstName=this.state.firstName;
        var lastName=this.state.lastName;
        var sex=this.state.sex;

        if (sex == 0){
            sex = "Male"
        }
        if (sex == 1){
            sex = "Female"
        }
        if (sex == 2){
            sex = "Others.."
        }

        var branch=this.state.branch;

        if (branch == 0){
            branch = "Davao City"
        }
        if (branch == 1){
            branch = "Cebu City"
        }
        if (branch == 2){
            branch = "IloIlo City"
        }
        if (branch == 3){
            branch = "Cagayan De Oro City"
        }
        if (branch == 4){
            branch = "Gensan City"
        }
        if (branch == 5){
            branch = "Digos City"
        }
        if (branch == 6){
            branch = "Quezon City"
        }
        if (branch == 7){
            branch = "Bulacan City"
        }
        if (branch == 8){
            branch = "Manila City"
        }
        if (branch == 9){
            branch = "Makati City"
        }

        var date_of_birth=this.state.date;
        var age=this.state.age;
        var email=this.state.email;
        var contact_no = this.state.contact_no;
        var address = this.state.address;
        var job=this.state.job;

        if (job == 0){
            job = "Chief Executive Officer (CEO)"
        }
        if (job == 1){
            job = "Chief Operating Officer (COO)"
        }
        if (job == 2){
            job = "Chief Financial Officer (CFO)"
        }
        if (job == 3){
            job = "Chief Marketing Officer (CMO)"
        }
        if (job == 4){
            job = "Chief Technology Officer (CTO)"
        }
        if (job == 5){
            job = "President"
        }
        if (job == 6){
            job = "Vice President"
        }
        if (job == 7){
            job = "Executive Assistant"
        }
        if (job == 8){
            job = "Operations manager"
        }
        if (job == 9){
            job = "Environmental manager"
        }
        if (job == 10){
            job = "Accountant"
        }
        if (job == 11){
            job = "Office manager"
        }
        if (job == 12){
            job = "Receptionist"
        }
        if (job == 13){
            job = "Foreperson, supervisor, lead person"
        }
        if (job == 14){
            job = "Marketing manager"
        }
        if (job == 15){
            job = "Purchasing manager"
        }
        if (job == 16){
            job = "Manager"
        }
        if (job == 17){
            job = "Professional Staff"
        }
        
        var position=this.state.position;

        if (position == 0){
            position = "Senior V"
        }
        if (position == 1){
            position = "Senior IV"
        }
        if (position == 2){
            position = "Senior III"
        }
        if (position == 3){
            position = "Senior II"
        }
        if (position == 4){
            position = "Senior I"
        }
        if (position == 5){
            position = "Junior V"
        }
        if (position == 6){
            position = "Junior IV"
        }
        if (position == 7){
            position = "Junior III"
        }
        if (position == 8){
            position = "Junior II"
        }
        if (position == 9){
            position = "Junior I"
        }
        if (position == 10){
            position = "Entry II"
        }
        if (position == 11){
            position = "Entry I"
        }

        var salary=this.state.salary;

        switch (job)
        {
            case "Chief Executive Officer (CEO)":
                salary = 100000;
                break;
            case "Chief Operating Officer (COO)":
                salary = 95000;
                break;
            case "Chief Financial Officer (CFO)":
                salary = 90000;
                break;
            case "Chief Marketing Officer (CMO)":
                salary = 85000;
                break;
            case "Chief Technology Officer (CTO)":
                salary = 80000;
                break;
            case "President":
                salary = 82000;
                break;
            case "Vice President":
                salary = 85000;
                break;
            case "Executive Assistant":
                salary = 86000;
                break;
            case "Operations manager":
                salary = 96000;
                break;
            case "Environmental manager":
                salary = 64000;
                break;
            case "Accountant":
                salary = 53000;
                break;
            case "Office manager":
                salary = 42000;
                break;
            case "Receptionist":
                salary = 53000;
                break;
            case "Foreperson, supervisor, lead person":
                salary = 62000;
                break;
            case "Marketing manager":
                salary = 42000;
                break;
            case "Purchasing manager":
                salary = 62000;
                break;
            case "Manager":
                salary = 42000;
                break;
            case "Professional Staff":
                salary = 52000;
                break;
        }

        switch (position)
              {
                  case "Senior V":
                      salary += 20000;
                      break;
                  case "Senior IV":
                      salary += 19000;
                      break;
                  case "Senior III":
                      salary += 18000;
                      break;
                  case "Senior II":
                      salary += 17000;
                      break;
                  case "Senior I":
                      salary += 16000;
                      break;
                  case "Junior V":
                      salary += 15000;
                      break;
                  case "Junior IV":
                      salary += 14000;
                      break;
                  case "Junior III":
                      salary += 13000;
                      break;
                  case "Junior II":
                      salary += 12000;
                      break;
                  case "Junior I":
                      salary += 11000;
                      break;
                  case "Entry II":
                      salary += 10000;
                      break;
                  case "Entry I":
                      salary += 9000;
                      break;
              }

        if(
        firstName.length==0 || 
        lastName.length == 0 || 
        sex.length == 0 || 
        branch.length== 0 || 
        date_of_birth.length == 0 ||
        age.length == 0 ||
        email.length == 0 ||
        contact_no.length == 0 ||
        address.length == 0 ||
        job.length == 0 ||
        position.length == 0)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var InsertAPIURL = "http://10.0.2.2:80/HR/insert.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                firstName:firstName,
                lastName:lastName,
                sex:sex,
                branch:branch,
                date_of_birth:date_of_birth,
                age:age,
                email:email,
                contact_no:contact_no,
                address:address,
                job:job,
                position:position,
                salary:salary
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
                })
                .catch((error)=>
                {
                    alert("Error"+error);
                })
        }
    }
    render()
    
    {
        return(

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
      }}> DATABASE REGISTRATION </Text>

            <View style={styles.ViewStyle}>
                
                <TextInput
                    placeholder={"FIrst Name"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={firstName=>this.setState({firstName})}
                />

                <TextInput
                    placeholder={"Last Name"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={lastName=>this.setState({lastName})}
                />


    <ModalDropdown 
        style={styles.txtStyle}
        options={["Male","Female","Others.."]}
        defaultValue={"Sex                                                                                    V"}
        textStyle={{
           fontSize: 14
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          height: 110,
          width: '90%',
          marginTop: -57,
          marginLeft: -5,
          paddingLeft: 5
        }}
        isFullWidth={true}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        onSelect = {(sex)=> this.setState({sex})}/>

<ModalDropdown 
        style={styles.txtStyle}
        options={[
        "Davao City","Cebu City","IloIlo City",
        "Cagayan De Oro City","Gensan City","Digos City",
        "Quezon City","Bulacan City","Manila City",
        "Makati City"]}
        defaultValue={"Branch                                                                              V"}
        textStyle={{
           fontSize: 14
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          height: 110,
          width: '90%',
          marginTop: -57,
          marginLeft: -5,
          paddingLeft: 5
        }}
        isFullWidth={true}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        onSelect = {(branch)=> this.setState({branch})}/>

<View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
  <Text style={styles.txtStyle5}> Date of Birth: </Text> 
  <DatePicker
        style={styles.txtStyle4}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-DD-MM"
        minDate="1950-05-01"
        maxDate="2999-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
        useNativeDriver= {true}
      />
</View>

                <TextInput
                    placeholder={"Age"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    keyboardType = 'numeric'
                    onChangeText={age=>this.setState({age})}
                />

                <TextInput
                    placeholder={"Email"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={email=>this.setState({email})}
                />

                <TextInput
                    placeholder={"Contact Number"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    keyboardType = 'numeric'
                    onChangeText={contact_no=>this.setState({contact_no})}
                />

                <TextInput
                    placeholder={"Address"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={address=>this.setState({address})}
                />

<ModalDropdown 
        style={styles.txtStyle}
        options={[
            "Chief Executive Officer (CEO)",
            "Chief Operating Officer (COO)",
            "Chief Financial Officer (CFO)",
            "Chief Marketing Officer (CMO)",
            "Chief Technology Officer (CTO)",
            "President",
            "Vice President",
            "Executive Assistant",
            "Operations manager",
            "Environmental manager",
            "Accountant",
            "Office manager",
            "Receptionist",
            "Foreperson, supervisor, lead person",
            "Marketing manager",
            "Purchasing manager",
            "Manager",
            "Professional Staff",]}
        defaultValue={"Job                                                                                    V"}
        textStyle={{
           fontSize: 14
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          height: 250,
          width: '90%',
          marginTop: '54%',
          marginLeft: -5,
          paddingLeft: 5
        }}
        isFullWidth={true}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        onSelect = {(job)=> this.setState({job})}/>

<ModalDropdown 
        style={styles.txtStyle}
        options={[
            "Senior V",
            "Senior IV",
            "Senior III",
            "Senior II",
            "Senior I",
            "Junior V",
            "Junior IV",
            "Junior III",
            "Junior II",
            "Junior I",
            "Entry II",
            "Entry I"]}
        defaultValue={"Position                                                                            V"}
        textStyle={{
           fontSize: 14
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          height: 250,
          width: '90%',
          marginTop: '54%',
          marginLeft: -5,
          paddingLeft: 5
        }}
        isFullWidth={true}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          }}
        onSelect = {(position)=> this.setState({position})}/>

                <Button
                    title={"Save Record"}
                    onPress={this.InsertRecord}
                />

            </View>
            </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({

    ViewStyle:{
        flex:1,
        padding: 20,
        marginTop:10,
        top: '16%'
    },

    txtStyle:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    txtStyle2:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 5,
        width: 175,
        marginBottom: 10,
        backgroundColor: 'white',
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
    txtStyle3:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'white',
        width: 245,
        marginRight: 5
    },
    txtStyle4:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 10,
        padding: 1,
        width: '65%',
        backgroundColor: 'white',
        
    },

    txtStyle5:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingTop: 11,
        paddingBottom: 11,
        paddingLeft:5,
        marginBottom: 10,
        width: '30%',
        right: 5,
        backgroundColor: 'white',
        textAlign:'justify',
        fontSize: 13
        
    },




});