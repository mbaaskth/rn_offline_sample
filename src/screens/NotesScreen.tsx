import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { useNotesContext } from '../context/NotesContext';

type NotesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Notes'>;

const NotesScreen: React.FC = () => {
  const navigation = useNavigation<NotesScreenNavigationProp>();
  const { notes } = useNotesContext();

  return (
    <View>
      <FlatList
        data={notes}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Add a Note"
        onPress={() => navigation.navigate('AddNote')}
      />
    </View>
  );
};

export default NotesScreen;
