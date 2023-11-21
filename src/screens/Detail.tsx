import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../routes/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}
export const Detail = ({route}: Props) => {
console.log(route.params?.original_title)
  return (
    <View>
      <Text style={{color: 'black'}}> Detail Screen</Text>
    </View>
  );
};
