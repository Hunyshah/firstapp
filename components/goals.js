import { View ,Text,StyleSheet,Pressable} from "react-native";

const GoalsItems = ({text,deletedata,id}) => {
  return (
    <Pressable android_ripple={{color:'gray'}} onPress={deletedata.bind(this,id)}>

    <View  style={styles.listStyle}>
        <Text style={{padding:5,color:'white'}}  >
            {text}
        </Text>
    </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    listStyle:{
        backgroundColor:'#5e0acc',
        borderRadius:7,
        padding:5,
        margin:8,
        color:'white'
       }
})

export default GoalsItems;