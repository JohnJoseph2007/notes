import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('window').width

export default class Note extends React.Component {
    render(){
        return(
            <View>
                <Text style={st.text}>{this.props.val.notebody}</Text>
                <TouchableOpacity style={st.touchableopacity} onPress={this.props.touchableopacity}>
                    <Text style={st.touchableopacitytext}>Delete</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const st = StyleSheet.create({
    text:{
        fontSize:20,
        textAlign:'center',
        marginBottom:10
    },

    touchableopacity:{
        backgroundColor:'red',
        borderRadius:30,
        paddingTop:5,
        paddingBottom:5,
        width:100,
        marginLeft:(w/2)-80
    },

    touchableopacitytext:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    }
})