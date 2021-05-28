import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Note extends React.Component {
    render(){
        return(
            <View>
                <Text>{this.props.val.notebody}</Text>
                <TouchableOpacity onPress={this.props.touchableopacity}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        )
    }
}