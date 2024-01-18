import { ReactNode } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Header } from './header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Footer } from './footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <SafeAreaView style={{ height: '100%', width: '100%', zIndex: 99999999, position: 'absolute' }}>
    <Header />
    <KeyboardAvoidingView style={{ flex: 1 }}>{children}</KeyboardAvoidingView>
    <SafeAreaView style={{ flex: 0.1 }}>
      <Footer />
    </SafeAreaView>
  </SafeAreaView>
);
