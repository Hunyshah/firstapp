import { useState } from "react"
import { Button, TextInput, View,StyleSheet, Modal ,Image} from "react-native"

const Goalinput = (props) => {
    const [taskInputState,setTaskInputState]=useState('')

    const taskInputHandler = (enterdInput)=>{
        setTaskInputState(enterdInput)
      }
    const onAddtasks =()=>{
      props.onAddTasks(taskInputState)
      setTaskInputState('')
    }
  return (
    <Modal visible={props.modalvisible} animationType="slide">
    <View style={styles.inputContainer}>
      <Image style={{width:100,height:100, margin:20}} source={require('../assets/images/todo.png')} />
      <TextInput style={styles.taskInput} placeholder='Please enter your Tasks' onChangeText={taskInputHandler} value={taskInputState}/>
      <View style={{flexDirection:'row',margin:12}}>
      <View style={{marginHorizontal:8}}> 
        <Button onPress={onAddtasks} title='Add Task'/>
               </View>
      <View>
        <Button onPress={props.oncancel} title='cancel Task'/>
        </View>
     </View>
     </View>
     </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        backgroundColor:'#5e0acc'
      
       },
       taskInput:{
        borderWidth:2,
        borderColor:'#cccccc',
        width:'70%',
        marginRight:8,
        paddingHorizontal:8,
        backgroundColor:'white'
       },

})

export default Goalinput