import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Theme colors
const COLORS = {
  primary: '#2196F3',
  secondary: '#757575',
  background: '#FFFFFF',
  text: '#212121',
  lightText: '#757575',
  border: '#E0E0E0',
};

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Screen Components
const Screen1 = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 24, color: COLORS.text}}>Screen 1</Text>
  </View>
);

const Screen2 = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 24, color: COLORS.text}}>Screen 2</Text>
  </View>
);

const Screen3 = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 24, color: COLORS.text}}>Screen 3</Text>
  </View>
);

const Screen4 = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 24, color: COLORS.text}}>Screen 4</Text>
  </View>
);

const Screen5 = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 24, color: COLORS.text}}>Screen 5</Text>
  </View>
);

const Screen6 = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 24, color: COLORS.text}}>Screen 6</Text>
  </View>
);

// Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.border,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.background,
        headerLeft: () => (
          <Icon
            name="menu"
            size={24}
            color={COLORS.background}
            style={{ marginLeft: 16 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
      })}>
      <Tab.Screen
        name="Home"
        component={Screen1}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Screen2}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Screen3}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Drawer Navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.background,
        drawerStyle: {
          backgroundColor: COLORS.background,
        },
      }}
      drawerContent={props => {
        const {routeNames, index} = props.state;
        const focused = routeNames[index];

        return (
          <View style={{flex: 1}}>
            <View style={{alignItems: 'center', marginVertical: 20}}>
              <Icon name="account-circle" size={80} color={COLORS.primary} />
              <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: COLORS.text, marginTop: 10}}>
                Navigation Menu
              </Text>
            </View>
            <View style={{flex: 1}}>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="home" color={color} size={size} />
                )}
                label="Home"
                onPress={() => props.navigation.navigate('TabNavigator', { screen: 'Home' })}
                focused={focused === 'TabNavigator'}
                activeBackgroundColor={COLORS.primary}
                inactiveBackgroundColor={COLORS.background}
                inactiveTintColor={COLORS.text}
                activeTintColor={COLORS.background}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="magnify" color={color} size={size} />
                )}
                label="Search"
                onPress={() => props.navigation.navigate('TabNavigator', { screen: 'Search' })}
                focused={focused === 'TabNavigator'}
                activeBackgroundColor={COLORS.primary}
                inactiveBackgroundColor={COLORS.background}
                inactiveTintColor={COLORS.text}
                activeTintColor={COLORS.background}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="account" color={color} size={size} />
                )}
                label="Profile"
                onPress={() => props.navigation.navigate('TabNavigator', { screen: 'Profile' })}
                focused={focused === 'TabNavigator'}
                activeBackgroundColor={COLORS.primary}
                inactiveBackgroundColor={COLORS.background}
                inactiveTintColor={COLORS.text}
                activeTintColor={COLORS.background}
              />
            </View>
            <View style={{borderTopWidth: 1, borderTopColor: COLORS.border, paddingTop: 10}}>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="view-dashboard" color={color} size={size} />
                )}
                label="Screen 4"
                onPress={() => props.navigation.navigate('Screen4')}
                focused={focused === 'Screen4'}
                activeBackgroundColor={COLORS.primary}
                inactiveBackgroundColor={COLORS.background}
                inactiveTintColor={COLORS.text}
                activeTintColor={COLORS.background}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="cog" color={color} size={size} />
                )}
                label="Screen 5"
                onPress={() => props.navigation.navigate('Screen5')}
                focused={focused === 'Screen5'}
                activeBackgroundColor={COLORS.primary}
                inactiveBackgroundColor={COLORS.background}
                inactiveTintColor={COLORS.text}
                activeTintColor={COLORS.background}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="information" color={color} size={size} />
                )}
                label="Screen 6"
                onPress={() => props.navigation.navigate('Screen6')}
                focused={focused === 'Screen6'}
                activeBackgroundColor={COLORS.primary}
                inactiveBackgroundColor={COLORS.background}
                inactiveTintColor={COLORS.text}
                activeTintColor={COLORS.background}
              />
            </View>
          </View>
        );
      }}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Screen4"
        component={Screen4}
        options={{
          headerShown: true,
          title: 'Screen 4',
        }}
      />
      <Drawer.Screen
        name="Screen5"
        component={Screen5}
        options={{
          headerShown: true,
          title: 'Screen 5',
        }}
      />
      <Drawer.Screen
        name="Screen6"
        component={Screen6}
        options={{
          headerShown: true,
          title: 'Screen 6',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator; 