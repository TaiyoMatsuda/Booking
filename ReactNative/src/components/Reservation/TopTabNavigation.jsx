import { useState } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TimeLine from './TimeLine';

const TopTab = createMaterialTopTabNavigator();

function TopTabNavigation() {
  const [tabs] = useState([
    { key: 'tab1', title: 'Room1', component: TimeLine },
    { key: 'tab2', title: 'Room2', component: TimeLine },
    { key: 'tab3', title: 'Room3', component: TimeLine },
    { key: 'tab4', title: 'Room4', component: TimeLine },
    { key: 'tab5', title: 'Room5', component: TimeLine },
    { key: 'tab6', title: 'Room6', component: TimeLine },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <TopTab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        {tabs.map((tab) => (
          <TopTab.Screen
            key={tab.key}
            name={tab.title}
            component={tab.component}
          />
        ))}
      </TopTab.Navigator>
    </View>
  );
}

export default TopTabNavigation;
