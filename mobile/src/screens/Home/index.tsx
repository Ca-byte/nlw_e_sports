import React from 'react';
import { View, Image } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { GAMES } from '../../utils/games';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />
      <Heading
      title="Find your duo!"
      subtitle="Select the game you want to play..."
       />

       <GameCard 
       data={GAMES[0]}

       />

    </View>
  );
}