import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import logoImg from '../../assets/logo-nlw-esports.png'
import { styles } from './styles';
import { Background } from '../../components/Background';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])
const navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl}:GameCardProps ){
    navigation.navigate('game', {id, title, bannerUrl})
}
useEffect(() => {
  fetch('http://192.168.1.104:3333/games')
  .then(Response => Response.json())
  .then(data => setGames(data))
},[])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image 
          source={logoImg}
          style={styles.logo}
        />
        <Heading
          title="Find your duo!"
          subtitle="Select the game you want to play..."
        />
        <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item})=> (
          <GameCard 
            onPress={() => handleOpenGame(item)}
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
          />



      </SafeAreaView>
    </Background>
  );
}