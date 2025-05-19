import Reactotron, { ReactotronReactNative } from "reactotron-react-native";
import mmkvPlugin from "reactotron-react-native-mmkv";
import { storage } from "./MMKVConfig";

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

Reactotron.configure({
  name: "PersonalFit AI App",
})
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false,
    errors: { veto: () => false },
    overlay: false,
  })

  .use(mmkvPlugin<ReactotronReactNative>({ storage }))
  .connect();

// Make it available for debugging
console.tron = Reactotron;

export default Reactotron;
