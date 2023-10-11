import React, { forwardRef, useEffect, useRef, useState } from 'react';
import * as S from './TextInput.styles';
import { Animated, TextInputProps } from 'react-native';

interface IProps extends TextInputProps {
  marginVertical?: number,
  marginHorizontal?: number,
  marginBottom?: number,
  marginTop?: number,
  paddingHorizontal?: number,
  paddingVertical?: number,
  label?: string
}

const TextInput = forwardRef((props: IProps, ref) => {

  const [isFocused, setIsFocused] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    
  };

  const handleBlur = () => {
    if (props.value === undefined || props.value === '') {
      setIsFocused(false);
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  useEffect(() => {
    // Inicialize a animação se o valor for zero ou vazio
    if (props.value && props.value?.length > 0) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  }, [props.value]);

  const labelStyle = {
    position: 'absolute',
    left: 12,
    zIndex: 99,
    backgroundColor: 'white',
    top: animatedValue.interpolate({
      inputRange: [0, 0],
      outputRange: [16, -5],
    }),
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', 'black'],
    }),
  };

  return (
    <S.Container>
      <Animated.Text style={labelStyle}>{props.label}</Animated.Text>
      <S.TextInput
        ref={ref}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        
      />
    </S.Container>
  );
});

export default TextInput;
