import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>ChatScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
// });

export default ChatScreen;
