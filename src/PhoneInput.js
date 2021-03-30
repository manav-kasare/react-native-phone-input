import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import countries from './assets/countries.json';
import flags from './assets/flags.json';

export default function PhoneInput({
  countryCode,
  setCountryCode,
  country,
  phoneNumber,
  setPhoneNumber,
  onPressFlag,
  style,
}) {
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    const flagCode = countries[country].flag;
    setFlag(flags[flagCode]);
    setCountryCode(countries[country].callingCode[0]);
  }, [country]);

  const onChangeText = text => setPhoneNumber(text);

  return (
    <View style={style ? style : styles.container}>
      <TouchableHighlight
        style={styles.flagView}
        onPress={onPressFlag}
        underlayColor="rgba(0,0,0,0.3)">
        <Text style={styles.flag}>{flag}</Text>
      </TouchableHighlight>
      <Text style={styles.dialingCode}>+{countryCode}</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        keyboardType="number-pad"
        textContentType="telephoneNumber"
        placeholder="Phone Number"
        placeholderTextColor="grey"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 15,
    borderWidth: 0.3,
    borderColor: 'rgba(0,0,0,0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  flagView: {
    height: 50,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.3,
    borderRightColor: 'rgba(0,0,0,0.3)',
  },
  flag: {
    fontSize: 25,
  },
  dialingCode: {
    marginLeft: 5,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: 'transparent',
  },
});
