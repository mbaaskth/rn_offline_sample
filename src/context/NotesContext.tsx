import React, { createContext, useContext, ReactNode } from 'react';
import { useNotes } from '../hooks/useNotes';

interface NotesProviderProps {
  children: ReactNode;
}

const NotesContext = createContext<ReturnType<typeof useNotes> | undefined>(undefined);

export const NotesProvider: React.FC<NotesProviderProps> = ({ children }) => {
  const notes = useNotes();
  return (
    <NotesContext.Provider value={notes}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = (): ReturnType<typeof useNotes> => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotesContext must be used within a NotesProvider');
  }
  return context;
};
