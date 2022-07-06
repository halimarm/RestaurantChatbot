import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

type Props = React.ComponentProps<typeof TextInput> & {
  label?: string;
  value: string;
  onChangeText: (value: string) => void;
};

const TextField: React.FC<Props> = props => {
  const {label, value, onChangeText, ...restOfProps} = props;

  return (
    <View>
      <View style={styles.textInputContainer}>
        {label && <Text>{label}</Text>}
        <TextInput
          style={styles.input}
          {...restOfProps}
          value={value}
          // onBlur={event => {
          //   onBlur?.(event);
          // }}
          onChangeText={val => onChangeText(val)}
          // onFocus={event => {
          //   onFocus?.(event);
          // }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'column',
  },
  input: {
    padding: 12,
    height: 46,
    backgroundColor: '#F8F8F8',
    borderColor: '#F8F8F8',
    paddingHorizontal: 12,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
  },
});

export default TextField;
