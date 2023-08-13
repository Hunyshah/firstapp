import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet,  View,Text } from 'react-native';
import GoalsItems from './components/goals';
import Goalinput from './components/goalinput';

export default function App() {
  const [allTasks,setAllTasks] = useState([])
  const [visible,setVisible] = useState(false);
  const endAddGoalHandler = ()=>{
    setVisible(false)
      }
  const modalVisibleHandler = ()=>{
    setVisible(true)
  }
  const addTaskHandler =(taskInputState)=>{
     setAllTasks((prev)=>[...prev,{text:taskInputState,id:Math.random().toString()}])
     endAddGoalHandler();
  }
  const deleteGoal =(id)=>{
    setAllTasks((prev)=>{
      return prev.filter((item)=> item.id !== id)
    })
    
  }
  
  return (
    <View style={styles.appContainer}>
      <Text style={{backgroundColor:'white',margin:40,textAlign:'center',fontSize:30 , fontFamily:'serif'}}> Click Input to add Your Todos!  </Text>
      <Button title='Input Data' color={'red'} onPress={modalVisibleHandler}/> 
     <Goalinput onAddTasks={addTaskHandler} modalvisible={visible} oncancel={endAddGoalHandler}/>
     <View style={styles.goalsContainer}>
      <FlatList data={allTasks} renderItem={(item)=>{
        return <GoalsItems text={item.item.text} id={item.item.id} deletedata={deleteGoal}/>
      }} 
      keyExtractor={(item,index)=>{
return item.id
      }}
       />
      
      
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  flex:1,
  padding:50,
  backgroundColor:'black'
  
 },
 
 goalsContainer:{
  flex:5
 },
 
});
