import React,{Component,useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground} from 'react-native';
import bg from '../assets/bg.jpg';
import ModalDropdown from 'react-native-modal-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default function HRInsert ()
{
    
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textdate, setTextdate] = useState('yyyy-dd-mm');

    const [firstName1, setFirstName] = useState('');
    const [lastName1, setLastName] = useState('');
    const [sex1, setSex] = useState('');
    const [branch1, setBranch] = useState('');
    const [date_of_birth1, setDate_of_Birth] = useState('');
    const [age1, setAge] = useState('');
    const [email1, setEmail] = useState('');
    const [contact_no1, setContact_no] = useState('');
    const [address1, setAddress] = useState('');
    const [job1, setJob] = useState('');
    const [position1, setPosition] = useState('');
   
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
  
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getFullYear() + '-' + tempDate.getDate() + '-' + (tempDate.getMonth() + 1);
        setDate_of_Birth(fDate);
        setTextdate(fDate);
  
        console.log('CheckerDate:'+ fDate);
      }
  
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      }

    const InsertRecord=()=>
    {
        var firstName=firstName1;
        var lastName=lastName1;
        var sex=sex1;

        if (sex == 0){
            sex = "Male"
        }
        if (sex == 1){
            sex = "Female"
        }
        if (sex == 2){
            sex = "Others.."
        }

        var branch=branch1;

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

        var date_of_birth=date_of_birth1;
        var age=age1;
        var email=email1;
        var contact_no = contact_no1;
        var address = address1;
        var job=job1;

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
        
        var position=position1;

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

        var salary;

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
                    onChangeText={firstName=>setFirstName(firstName)}
                />

                <TextInput
                    placeholder={"Last Name"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={lastName=>setLastName(lastName)}
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
        onSelect = {(sex)=> setSex(sex)}/>

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
        onSelect = {(branch)=> setBranch(branch)}/>

<View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <View style={styles.txtStyle4}>
          <Button color="#2474c8" title='Date of Birth' onPress={() => showMode('date')}/>
      </View>
      {show && (
        <DateTimePicker
        testID = 'dateTimePicker'
        value={date}
        mode={mode}
        is24Hour={false}
        display='default'
        onChange={onChange}
        />
      )}
    <Text style={styles.txtStyle5}> {textdate} </Text> 
</View>

                <TextInput
                    placeholder={"Age"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    keyboardType = 'numeric'
                    onChangeText={age=>setAge(age)}
                />

                <TextInput
                    placeholder={"Email"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={email=>setEmail(email)}
                />

                <TextInput
                    placeholder={"Contact Number"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    keyboardType = 'numeric'
                    onChangeText={contact_no=>setContact_no(contact_no)}
                />

                <TextInput
                    placeholder={"Address"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={address=>setAddress(address)}
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
          height: 150,
          width: '90%',
          marginTop: '28%',
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
        onSelect = {(job)=> setJob(job)}/>

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
          height: 120,
          width: '90%',
          marginTop: '20%',
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
        onSelect = {(position)=> setPosition(position)}/>

                <Button
                color="#2474c8" 
                    title={"Save Record"}
                    onPress={InsertRecord}
                />

            </View>
            </ImageBackground>
            </View>
        )
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
        width: '50%',
    },

    txtStyle5:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 11,
        marginBottom: 10,
        width: '39%',
        backgroundColor: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 13
        
    },




});