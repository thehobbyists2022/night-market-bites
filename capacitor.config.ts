import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.clarityclinicalsolutions.nightmarketbites',
  appName: 'Night Market Bites',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    iosScheme: 'capacitor',
  }
};

export default config;
