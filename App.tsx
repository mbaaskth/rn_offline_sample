import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotesScreen from './src/screens/NotesScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';
import { RootStackParamList } from './src/types/navigation';  // 스크린 타입 가져오기

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes">
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="AddNote" component={AddNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
