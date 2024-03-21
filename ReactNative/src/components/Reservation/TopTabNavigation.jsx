import { useState } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TimeLine from './TimeLine';

const TopTab = createMaterialTopTabNavigator();

function TopTabNavigation({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <TopTab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        <TopTab.Screen name="Room1" component={TimeLine} />
        <TopTab.Screen name="Room2" component={TimeLine} />
        <TopTab.Screen name="Room3" component={TimeLine} />
        <TopTab.Screen name="Room4" component={TimeLine} />
        <TopTab.Screen name="Room5" component={TimeLine} />
        <TopTab.Screen name="Room6" component={TimeLine} />
      </TopTab.Navigator>
    </View>
  );
}

export default TopTabNavigation;
