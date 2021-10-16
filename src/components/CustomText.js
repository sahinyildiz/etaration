import React from 'react';
import {Text} from 'react-native';

const CustomText = (props) => {
  const getErrorColor = () => {
    if (props.error) {
      return {color: 'red'};
    }
  };
  const getLabel = () => {
    if (props.required && props.showRequired) {
      return props.label + ' (*)';
    }
    return props.label;
  };
  return (
    <Text numberOfLines={props.numberOfLines} {...props} style={[props.style, getErrorColor()]}>
      {getLabel()}
    </Text>
  );
};

export default CustomText;
