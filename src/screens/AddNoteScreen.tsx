import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { useNotesContext } from '../context/NotesContext';

type AddNoteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddNote'>;

const AddNoteScreen: React.FC = () => {
  const [note, setNote] = useState<string>('');
  const { addNote } = useNotesContext();
  const navigation = useNavigation<AddNoteScreenNavigationProp>();

  const handleAddNote = () => {
    if (note.trim()) {
      addNote(note.trim());
      setNote('');
      navigation.goBack();
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your note"
        value={note}
        onChangeText={setNote}
      />
      <Button title="Add Note" onPress={handleAddNote} />
    </View>
  );
};

export default AddNoteScreen;
