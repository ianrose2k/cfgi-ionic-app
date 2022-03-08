import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'world.cfgi.app',
  appName: 'CFGI',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      UseSwiftLanguageVersion: '5',
      AndroidXEnabled: 'true',
      GradlePluginKotlinEnabled: 'true',
      GradlePluginKotlinCodeStyle: 'official',
      GradlePluginKotlinVersion: '1.3.50',
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      FadeSplashScreenDuration: '0',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'none',
      AutoHideSplashScreen: 'true',
      SplashScreenDelay: '0',
      ShowSplashScreenSpinner: 'false',
    }
  }
};

export default config;
