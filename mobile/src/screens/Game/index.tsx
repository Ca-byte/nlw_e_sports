import { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { GameParamsProps } from '../../@types/navigation';

import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Image, TouchableOpacity, View, Text } from 'react-native';

import { Background } from '../../components/Background';
import { Entypo } from '@expo/vector-icons'

import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'


export function Game() {
const route = useRoute()
const game = route.params as GameParamsProps;
const navigation = useNavigation()
const [duos, setDuos] = useState<DuoCardProps[]>([])

function handleGoBack(){
  navigation.goBack()
}

  useEffect(() => {
    fetch(`http://192.168.1.104:3333/games/${game.id}/ads`)
    .then(Response => Response.json())
    .then(data => setDuos(data))
  },[])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo 
            name='chevron-thin-left'
            color={THEME.COLORS.CAPTION_300}
            size={20}
            onPress={handleGoBack}
            />
          </TouchableOpacity>

          <Image 
          source={logoImg}
          style={styles.logo}
          />
          <View style={ styles.right}/>
        </View>

        <Image 
        source={{uri: game.bannerUrl}}
        style={styles.cover}
        resizeMode='cover'
        />
        <Heading 
        title={game.title}
        subtitle='Connect and start playing!'
        />
        <FlatList 
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({item})=> (
           <DuoCard
             data={item}
             onConnect={()=> {}}
           />
         )}
          style={styles.containerList}
          horizontal
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListcontent]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            There is not published Ads yet :(
          </Text>
         )}
        />
      </SafeAreaView>
    </Background>
  );
}