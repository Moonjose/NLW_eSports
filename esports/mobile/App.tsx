import { Background } from './src/components/Background';
import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading'

export default function App() {
  const [fontsLoader] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black
  });
  return (
    <Background>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
      {fontsLoader ? <Routes /> : <Loading />}
    </Background>
  );
}

