import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';

import { useRoute } from '@react-navigation/native'
import { styles } from './styles';
import { GameParamsProps } from '../../@types/navigation';

export function Game() {
const route = useRoute()
const game = route.params as GameParamsProps;
console.log(game)

  return (
    <Background>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </Background>
  );
}