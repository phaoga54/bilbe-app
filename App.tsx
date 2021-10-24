/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useRef } from 'react';
import {
  StyleSheet,
} from 'react-native';
import AppNavigator from '@src/navigation';
import { Provider } from 'react-redux';
import {store,persistor} from '@src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {

  const navigationRef = useRef();
  const routeNameRef = useRef();
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {console.log('store: ',store.getState())}
        <NavigationContainer
          ref={navigationRef}
          onReady={() =>
            (routeNameRef.current = navigationRef.current?.getCurrentRoute().name)
          }
          onStateChange={async () => {
            const previousRouteName = routeNameRef.current;
            const currentRouteName = navigationRef.current?.getCurrentRoute().name;

            if (previousRouteName !== currentRouteName) {
              console.log('screenTracking: ', previousRouteName, ' - ', currentRouteName)
            }

            // Save the current route name for later comparison
            routeNameRef.current = currentRouteName;
          }}
        >{/* Rest of your app code */}
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
