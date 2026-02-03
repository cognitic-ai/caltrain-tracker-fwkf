import { Stack } from 'expo-router/stack';
import * as AC from '@bacons/apple-colors';
import { isLiquidGlassAvailable } from 'expo-glass-effect';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const AppleStackPreset: NativeStackNavigationOptions =
  process.env.EXPO_OS !== 'ios'
    ? {}
    : isLiquidGlassAvailable()
    ? {
        headerTransparent: true,
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        headerLargeStyle: {
          backgroundColor: 'transparent',
        },
        headerTitleStyle: {
          color: AC.label as any,
        },
        headerBlurEffect: 'none',
        headerBackButtonDisplayMode: 'minimal',
      }
    : {
        headerTransparent: true,
        headerShadowVisible: true,
        headerLargeTitleShadowVisible: false,
        headerLargeStyle: {
          backgroundColor: 'transparent',
        },
        headerBlurEffect: 'systemChromeMaterial',
        headerBackButtonDisplayMode: 'default',
      };

export default function SchedulesLayout() {
  return (
    <Stack screenOptions={AppleStackPreset}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Schedules',
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen
        name="station-detail"
        options={{
          title: 'Station Details',
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
