// languageStore.tsx
import { atom } from 'nanostores';
import type { Language } from './types';

// 言語設定用のストア
export const languageStore = atom<Language>('ja');

// ブラウザ環境での初期化処理
if (typeof window !== 'undefined') {
  const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
  if (savedLanguage && ['ja', 'en'].includes(savedLanguage)) {
    languageStore.set(savedLanguage);
  }
}

// 言語設定の更新関数
export const setLanguage = (newLanguage: Language): void => {
  const currentLanguage = languageStore.get();
  if (newLanguage !== currentLanguage) {
    languageStore.set(newLanguage);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', newLanguage);
      window.dispatchEvent(
        new CustomEvent('languageChange', { detail: newLanguage })
      );
    }
  }
};

// 現在の言語取得関数
export const getLanguage = (): Language => languageStore.get();

// Select要素用のイベントハンドラー
export const handleLanguageChange = (event: Event): void => {
  const target = event.target as HTMLSelectElement;
  setLanguage(target.value as Language);
};

// 言語変更監視用のReactフック
import { useEffect } from 'react';

export const useLanguageChangeListener = (
  callback: (language: Language) => void
): void => {
  useEffect(() => {
    const onLanguageChange = (event: CustomEvent<Language>) => {
      callback(event.detail);
    };

    window.addEventListener(
      'languageChange',
      onLanguageChange as EventListener
    );

    return () => {
      window.removeEventListener(
        'languageChange',
        onLanguageChange as EventListener
      );
    };
  }, [callback]);
};