import React from 'react';
import { View, Button, SafeAreaView, StyleSheet } from 'react-native';
import notifee from '@notifee/react-native';

//need to put in export default so it renders
export default function Screen() {
  return (
    <View style={styles.content}>
      <SafeAreaView>
        <Button title="Display Notification" onPress={() => {}} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Ensures the safe area matches your app background
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
