import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native'

const Button = (props) => (
    <TouchableOpacity style={props.buttonStyle} onPress={props.onPress}>
        <Text style={props.titleStyle}>{props.title}</Text>
    </TouchableOpacity>
);
export default Button