/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { Button, SafeAreaView, View } from "react-native";
//import WebView from "react-native-webview";

// import React, { useRef, useState } from "react";
// import { SafeAreaView, Text, View } from "react-native";
// import { ThemeProvider } from '@react-navigation/native';
// import { Burger, Menu } from "./component";
  import FlexNav from "./component/navigation/FlexNavigation";
// import { useOnClickOutside } from "./hooks";
// import { theme } from "./theme";

const App = () => {
  // const [open, setOpen] = useState(false);
  // const node = useRef<any>();
  // useOnClickOutside(node, () => setOpen(false));

  return (
    // <ThemeProvider value={theme}>
    //   <>
    //     {/* <GlobalStyles /> */}
    //     <div ref={node}>
    //       <Burger open={open} setOpen={setOpen} />
    //       <Menu open={open} />
    //     </div>
    //   </>
    // </ThemeProvider>
  //   <SafeAreaView style={{ flex: 1 }}>
  //   <WebView 
  //     source={{ uri: 'https://reactnative.dev/' }} 
  //   />
  // </SafeAreaView>
    <View>
        <FlexNav url={"https://flex.fod247.fitness/login"} />      
      </View>
  );
};

export default App;
