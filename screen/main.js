import * as React from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

let w = Dimensions.get('window').width;

export default class MainScreen extends React.Component {
    constructor(){
        super();
        this.state={
            note: "",
            allnotes:[]
        };
    }

    render(){
        return(
            <SafeAreaProvider>
                <Header backgroundColor="#00A82D" centerComponent={{text:"NOTES", style:st.header}}></Header>
                <TextInput style={st.textinput} multiline maxLength={1000000} onChangeText={(abc)=>{this.setState({note:abc})}}/>
                <TouchableOpacity style={st.touchableopacity} onPress={()=>{
                    let tempnote = this.state.note;
                    this.setState({allnotes : tempnote})
                }}>
                    <Text style={st.touchableopacitytext}>Submit</Text>
                </TouchableOpacity>
                {this.state.allnotes.map((data, index)=>(
                    <Text>{this.state.allnotes[index]}</Text>
                ))}
            </SafeAreaProvider>
        )
    }
}

const st = StyleSheet.create({
    header: {
        fontFamily:'monospace',
        fontSize: 30, 
        fontWeight: 'bold',
        padding:1
    },

    textinput: {
        borderWidth:3,
        height:860,
        width:w-20,
        marginLeft:10,
        marginTop:5,
        borderRadius:10,
        padding:20
    },

    touchableopacity: {
        borderRadius: 20,
        backgroundColor: "#1f1e1e",
        width:90,
        marginLeft:915,
        marginRight:915,
        height:40,
        textAlign:'center',
        marginTop:3
    },

    touchableopacitytext: {
        color:"white",
        fontFamily:"monospace",
        fontSize: 20,
        textAlign:"center",
        paddingTop: 7
    }
})