import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import CustomText from './CustomText';

const CustomInput = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  const changeTextHandler = (text: string) => {
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  useEffect(() => {
    if (props.error) {
      setIsValid(false);
    } else if (!props.required || props.value) {
      setIsValid(true);
    }
  }, [props.value, props.required, props.error]);

  const blurHandler = () => {
    if (props.required && !props.value) {
      setIsValid(false);
    }
    setIsFocus(false);
  };

  const focusHandler = () => {
    setIsFocus(true);
  };

  const renderContentStyle = () => {
    var style = [styles.containerStyle, props.containerStyle];
    if (isFocus) {
      style = [...style];
    }
    if (!isValid) {
      style = [...style];
    }
    return style;
  };

  const renderLabelStyle = () => {
    var style = [props.labelStyle];
    if (!isValid) {
      style = [...style, {color: 'red'}];
    }
    return style;
  };

  return (
    <View style={renderContentStyle()}>
      <View style={[{flex: 1}, props.subContainerStyle]}>
        <CustomText label={props.label} style={renderLabelStyle()} />
        <TextInput
          placeholder={props.placeHolderText ? props.placeHolderText : 'None'}
          placeholderTextColor={'#C4C8DC'}
          {...props}
          onFocus={focusHandler}
          onBlur={blurHandler}
          style={[
            styles.style,
            props.editable !== false ? {} : {color: 'blue'},
            props.style,
          ]}
          editable={props.editable !== false}
          multiline={props.multiline?props.multiline:null}
          numberOfLines={props.numberOfLines?props.numberOfLines:null}
          secureTextEntry={props.secureTextEntry?props.secureTextEntry:null}
          onChangeText={changeTextHandler}
        />
      </View>
    </View>
  );
};
export default CustomInput;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
  },
  style: {
    borderRadius: 10,
    height: 56,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#C4C8DC',
    fontFamily: 'Gilroy-Bold',
    color: '#111',
  },
  logoStyle: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
    height: 60,
    fontFamily: 'Gilroy-Bold',
    color: '#C4C8DC',
    backgroundColor: '#27293E',
  },
});
