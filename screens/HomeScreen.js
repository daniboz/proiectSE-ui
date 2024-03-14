import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [genre, setGenre] = useState('');
  const [releaseYear, setYear] = useState('');
  const [actor, setActor] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Your Movie Filters</Text>
      <RNPickerSelect
        onValueChange={(value) => setGenre(value)}
        items={[
          { label: 'Action', value: 'action' },
          { label: 'Comedy', value: 'comedy' },
          { label: 'Drama', value: 'drama' },
          { label: 'Science-Fiction', value: 'sf' },
          { label: 'Horror', value: 'horror' },
        ]}
        placeholder={{ label: 'Select a genre...', value: null }}
        style={pickerSelectStyles}
      />
      <RNPickerSelect
        onValueChange={(value) => setYear(value)}
        items={[
          { label: '2020-now', value: '2020' },
          { label: '2010-2019', value: '20102019' },
          { label: '2000-2009', value: '20002009' },
          { label: '1990-1999', value: '19901999' },
          { label: '1980-1989', value: '19801989' },
        ]}
        placeholder={{ label: 'Select a year...', value: null }}
        style={pickerSelectStyles}
      />
      <RNPickerSelect
        onValueChange={(value) => setActor(value)}
        items={[
          { label: 'Tom Hanks', value: 'tomhanks' },
          { label: 'Julia Roberts', value: 'juliaroberts' },
          { label: 'Leonardo DiCaprio', value: 'leonardodicaprio' },
          { label: 'Johnny Depp', value: 'johnnydepp' },
          { label: 'Brad Pitt', value: 'bradpitt' },
        ]}
        placeholder={{ label: 'Choose an actor...', value: null }}
        style={pickerSelectStyles}
      />

      <Button title="Find Movies" onPress={() => navigation.navigate('Results', { genre, releaseYear, actor })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, 
    marginBottom: 20, 
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, 
    marginBottom: 20, 
  },
});

export default HomeScreen;
