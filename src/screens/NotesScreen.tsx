import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type NotesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Notes'>;

const NotesScreen = () => {
  const navigation = useNavigation<NotesScreenNavigationProp>();  // 네비게이션 타입 지정

  return (
    <View>
      <FlatList
        data={[]}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Add a Note"
        onPress={() => navigation.navigate('AddNote')}  // AddNote로 이동
      />
    </View>
  );
};

export default NotesScreen;
