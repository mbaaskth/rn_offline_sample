import { useState, useEffect } from 'react';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

// 노트의 타입을 정의합니다. 현재는 문자열로 가정합니다.
// 필요에 따라 더 복잡한 타입으로 확장할 수 있습니다.
type Note = string;
// type Note = {
//   id: string;
//   content: string;
//   createdAt: Date;
// };

// useNotes 훅의 반환 타입을 정의합니다.
interface UseNotesReturn {
  notes: Note[];
  addNote: (note: Note) => void;
  syncNotes: () => Promise<void>;
  isOffline: boolean;
}

export const useNotes = (initialNotes: Note[] = []): UseNotesReturn => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [isOffline, setIsOffline] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setIsOffline(!state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const addNote = (note: Note): void => {
    setNotes([...notes, note]);
  };

  const syncNotes = async (): Promise<void> => {
    if (!isOffline) {
      // 서버로 노트 동기화 로직을 여기에 구현합니다.
      // 예시:
      // await fetch('https://your-api.com/sync', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ notes }),
      // });
    }
  };

  return {
    notes,
    addNote,
    syncNotes,
    isOffline,
  };
};