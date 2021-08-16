import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '300'
  }
});

interface Props {
  text: string;
  backgroundColor?: string;
  extended?: boolean;
  onPress: (action: string) => void;
}

export const Button = ({
  text,
  backgroundColor = '#2D2D2D',
  extended = false,
  onPress
}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(text)}>
      <View
        style={{
          ...styles.container,
          backgroundColor,
          width: extended ? 180 : 80
        }}>
        <Text
          style={{
            ...styles.text,
            color: backgroundColor === '#9B9B9B' ? 'black' : 'white'
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
