import { MMKV } from "react-native-mmkv";
export const storage = new MMKV({
  id: "personal-fit-ai",
  encryptionKey: "perryhoang2012",
});

export const mmkvStorage = {
  setItem: (key: string, value: string) => storage.set(key, value),
  getItem: (key: string) => storage.getString(key) ?? null,
  removeItem: (key: string) => storage.delete(key),
};
