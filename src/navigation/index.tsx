import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '@src/constant/theme';
import HomeSvg from '@svgs/home.svg'
import SettingSvg from '@svgs/setting.svg'
import { SettingsScreen } from '@src/screens/setting-screen';
import { HomeStack } from './home-tab';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    const renderTabBarItem = (_: any, route: any) => {
        let icon = null;
        let label = '';
        switch (route?.name) {
            case 'Home':
                icon = <HomeSvg fill={'white'} />;
                label = 'Home';
                break;
            case 'Settings':
                icon = <SettingSvg fill={'white'} width={25} height={25} />;
                label = 'Settings';
                break;
        }

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {icon}
                <Text style={{ fontSize: 11, fontWeight: '600', color: 'white', marginTop: 10 }}>
                    {label}
                </Text>
            </View>
        );
    };
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarIcon: data => {
                    return renderTabBarItem(data, route)
                },
            })}
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: 'white',
                inactiveTintColor: 'white',
                showLabel: false,
                labelStyle: {
                    color: 'white'
                },
                style: {
                    backgroundColor: COLORS.tabsColor,
                    borderTopColor: 'transparent',
                    paddingTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeStack}

            />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}