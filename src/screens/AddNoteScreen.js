import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useNotes } from '../hooks/useNotes';

const AddNoteScreen = () => {
  const [note, setNote] = useState('');
  const { addNote } = useNotes([]);
  const navigation = useNavigation();

  const handleAddNote = () => {
    if (note.trim()) {
      addNote(note.trim());
      setNote('');
      navigation.goBack(); // 노트 추가 후 이전 화면으로 돌아감
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
