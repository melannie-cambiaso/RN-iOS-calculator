import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import useCalculator from '../hooks/useCalculator';
import styles from '../theme/AppTheme';

const CalculatorScreen = () => {
  const {
    number,
    lastNumber,
    equalTo,
    saveOperation,
    clean,
    delAction,
    toggleNegative,
    makeNumber
  } = useCalculator();

  return (
    <View style={styles.calContainer}>
      {lastNumber !== '0' && (
        <Text style={styles.miniResult}>{lastNumber}</Text>
      )}
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.result}>
        {number}
      </Text>

      {/* Fila de botones */}
      <View style={styles.row}>
        <Button text="C" backgroundColor="#9B9B9B" onPress={clean} />
        <Button text="+/-" backgroundColor="#9B9B9B" onPress={toggleNegative} />
        <Button text="del" backgroundColor="#9B9B9B" onPress={delAction} />
        <Button text="/" backgroundColor="#FF9427" onPress={saveOperation} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <Button text="7" onPress={makeNumber} />
        <Button text="8" onPress={makeNumber} />
        <Button text="9" onPress={makeNumber} />
        <Button text="X" backgroundColor="#FF9427" onPress={saveOperation} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <Button text="4" onPress={makeNumber} />
        <Button text="5" onPress={makeNumber} />
        <Button text="6" onPress={makeNumber} />
        <Button text="-" backgroundColor="#FF9427" onPress={saveOperation} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <Button text="1" onPress={makeNumber} />
        <Button text="2" onPress={makeNumber} />
        <Button text="3" onPress={makeNumber} />
        <Button text="+" backgroundColor="#FF9427" onPress={saveOperation} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <Button extended text="0" onPress={makeNumber} />
        <Button text="." onPress={makeNumber} />
        <Button text="=" backgroundColor="#FF9427" onPress={equalTo} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
