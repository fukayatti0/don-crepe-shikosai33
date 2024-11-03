// src/stores/useLanguage.tsx
import { useStore } from '@nanostores/react';
import { languageStore, setLanguage } from './languageStore';
import type { Language } from './types';

interface UseLanguageReturn {
  language: Language;
  setLanguage: (newLanguage: Language) => void;
}

export function useLanguage(): UseLanguageReturn {
  const language = useStore(languageStore);
  return { language, setLanguage };
}