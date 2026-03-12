import React from 'react';
import { View, Button, SafeAreaView, StyleSheet } from 'react-native';
import notifee from '@notifee/react-native';

//need to put in export default so it renders
export default function Screen() {
  //will place the notifcation funciton here
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      id: '123',
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  async function deleteNotification() {
    await notifee.cancelNotification('123');
  }

  //will place the notifcation funciton here
  async function updateNotification() {
    // Request permissions (required for iOS)
    //   await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      id: '123',
      title: 'Notification Title2',
      body: 'the notification has changed',
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <View style={styles.content}>
      <SafeAreaView>
        <Button
          title="Display Notification"
          onPress={() => onDisplayNotification()}
        />
        //will add a second button to update the notification
        <Button
          title="Update Notifcation"
          onPress={() => updateNotification()}
        />
        <Button
          title="Delete Notification"
          onPress={() => deleteNotification()}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: '#fff', // Ensures the safe area matches your app background
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
