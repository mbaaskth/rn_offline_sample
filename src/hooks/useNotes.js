import { useState, useEffect } from 'react';

export const useNotes = (initialNotes = []) => {
  const [notes, setNotes] = useState(initialNotes);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const syncNotes = async () => {
    if (!isOffline) {
      // 서버로 노트 동기화 로직
    }
  };

  return {
    notes,
    addNote,
    syncNotes,
    isOffline,
  };
};