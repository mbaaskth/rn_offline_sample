import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotesScreen from './src/screens/NotesScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';
import { RootStackParamList } from './src/types/navigation';
import { NotesProvider } from './src/context/NotesContext';
import { enableScreens } from 'react-native-screens';
import ErrorBoundary from './src/components/ErrorBoundary';

// react-native-screens 최적화 활성화
enableScreens();

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ErrorBoundary>
      <NotesProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Notes">
            <Stack.Screen name="Notes" component={NotesScreen} />
            <Stack.Screen name="AddNote" component={AddNoteScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NotesProvider>
    </ErrorBoundary>
  );
};

export default App;
