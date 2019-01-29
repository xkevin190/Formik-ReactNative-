import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Item, Input, Label} from 'native-base';


export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _onChange=(values)=>{
      this.props.onChange(this.props.name , values)
  }
  render() {
      const {label ,error,...rest} = this.props
    return (
      <View>
         <Item stackedLabel >
            <Label>{label}</Label>
            <Input {...rest}
            onChangeText={this._onChange}
            />
         </Item>   
         <Text style={{color:'red' , paddingVertical:5}}>{error}</Text>
      </View>
    );
  }
}
