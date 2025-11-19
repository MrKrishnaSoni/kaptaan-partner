import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import Header from '@/components/Layout/Header';
import { Contact, House, MessageSquareText, PackageSearch, PhoneCall } from 'lucide-react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
        header: () => <Header />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <House size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="call"
        options={{
          title: 'Call',
          tabBarIcon: ({ color }) => <PhoneCall size={20} color={color} />,
        }}
      />
       <Tabs.Screen
        name="chat"
        options={{
          title: 'Message',
          tabBarIcon: ({ color }) => <MessageSquareText size={20} color={color} /> ,
        }}
      />
        <Tabs.Screen
        name="jobs"
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color }) => <PackageSearch size={22} color={color} /> ,
        }}
      />
    </Tabs>
  );
}
