import { useRef, useState } from 'react';

export const useCalculator = () => {
  const [lastNumber, setLastNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const operator = useRef('');

  const clean = () => {
    setNumber('0');
    setLastNumber('0');
    operator.current = '';
  };

  const makeNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        setNumber(number + textNumber);
      } else if (number.includes('.') && textNumber === '0') {
        setNumber(number + textNumber);
      } else if (!number.includes('.') && textNumber !== '0') {
        if (number.startsWith('-0') && textNumber !== '0') {
          setNumber('-' + textNumber);
        } else {
          setNumber(textNumber);
        }
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const toggleNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const delAction = () => {
    const newNumber = number.slice(0, -1);
    setNumber(
      newNumber.length === 0 ||
        (newNumber.length === 1 && newNumber.startsWith('-'))
        ? '0'
        : newNumber
    );
  };

  const saveOperation = (operation: string) => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }
    setNumber('0');
    operator.current = operation;
  };

  const equalTo = () => {
    const num1 = Number(number);
    const num2 = Number(lastNumber);

    switch (operator.current) {
      case '+':
        setNumber((num2 + num1).toString());
        break;

      case 'X':
        setNumber((num2 * num1).toString());
        break;

      case '/':
        setNumber((num2 / num1).toString());
        break;

      case '-':
        setNumber((num2 - num1).toString());
        break;

      default:
        break;
    }
    setLastNumber('0');
  };

  return {
    number,
    lastNumber,
    equalTo,
    saveOperation,
    clean,
    toggleNegative,
    delAction,
    makeNumber
  };
};

export default useCalculator;
