import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
 import db from '../config';


export default class screen1 extends React.Component {
  constructor (){
    super ();
    var allStudents : []
  }
    componentDidMount = async ()=> {
     var classRef = await db.ref('/').on('value',data=>{
      var allStudents = []
      var classA = data.val.class_A
      for(var i in classA){
        allStudents.push(classA[i]);
      }
      allStudents.sort(function(a,b){
    return a.roll_no - b.roll_no;
      });
      this.setState({allStudents:allStudents})
  } 
     )} 
  updateAttendance(roll_no,status)    {
    var id = "";
   if(roll_no <= 9) {
     id = "0" + roll_no
   } 
   else {
     id = roll_no
   } 
  var today = new Date();
   var dd = today.getDate();
   var mm = today.getMonth()+1; 
   var yyyy = today.getFullYear();

   if(dd < 10) {
     dd = "0"+dd
   } 
  if(mm < 10){
     mm = "0"+mm
   } 

   today = "dd" +  "-" + "mm" + "-" + "yyyy"; 

   var ref_path = id;
   var class_ref = db.ref(ref_path); 
   class_ref.update({
     [today] : status,
   })
  }
  render(){
    return(
 
  <View> 
          
      <Text> Attendence App </Text> 
      <Text style={{fontWeight:"bold"}}> Student1 : </Text>
        <TouchableOpacity
            style={[styles.button,{backgroundColor:"#78F400"}]} >
            <Text> Present </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button1,{backgroundColor:"red"}]} >
          <Text> Absent </Text>
          </TouchableOpacity>

            <Text style={{fontWeight:"bold"}}> Student2 : </Text>
        <TouchableOpacity
            style={[styles.button,{backgroundColor:"#78F400"}]} >
            <Text> Present </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button1,{backgroundColor:"red"}]} >
          <Text> Absent </Text>
          </TouchableOpacity>

             <Text style={{fontWeight:"bold"}}> Student3 : </Text>
        <TouchableOpacity
            style={[styles.button,{backgroundColor:"#78F400"}]} >
            <Text> Present </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button1,{backgroundColor:"red"}]} >
          <Text> Absent </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => { this.props.navigation.navigate('screen2')}}
          >
          <Text style={styles.submitButton}> Submit </Text>
          </TouchableOpacity>
     </View>
    )
  }
}
const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    marginTop:5,
    width : 80,
    height:30,
    marginRight:200
      },
       button1:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    width : 80,
    height:30,
    marginLeft:50,
    marginTop : -30     
     },
    submitButton : {
  justifyContent : 'center',
    alignSelf : 'center',
    alignItems : "center",
    borderWidth : 2,
    width : 200,
    height:50,
    backgroundColor:"yellow",
    marginTop : 20,
    marginLeft : -70
    }
})


