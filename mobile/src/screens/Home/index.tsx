import React, { useEffect, useState } from 'react';
import { Image, FlatList, TouchableOpacity, View, useColorScheme, ActivityIndicator } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';
import { THEME } from '../../theme';
import { ArrowsCounterClockwise } from 'phosphor-react-native';

export function Home() {
  const navigation = useNavigation();
  const [games, setGames] = useState<GameCardProps[]>([]);
  const [newState, setNewState] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onClick =() => {
    setNewState(!newState);
  }

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch('https://findurduo.herokuapp.com/games');
      const data = await response.json();
      setGames(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(() => {
    fetchData();
  },[])
  useEffect(() => {
    fetchData();
  },[newState])

  function handleOpenGame({id, title, bannerUrl}: GameCardProps) {
    navigation.navigate('game', {id, title, bannerUrl});
  }
  const theme = useColorScheme();
  console.log(theme);
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo}/>
        <View style={styles.head}>
          <Heading title="Encontre seu duo!" subtitle="Selecione o game que desejar"/> 
          
        </View>
        
        <TouchableOpacity 
            style={styles.button}
            onPress={onClick}
        ><ArrowsCounterClockwise/>
        </TouchableOpacity>
        {isLoading && <ActivityIndicator color={THEME.COLORS.PRIMARY} />}
        <FlatList data={games} keyExtractor={item => item.id} renderItem={({item}) => (
          <GameCard 
          data={item}
          onPress={() => handleOpenGame(item)}
          />
        )} 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.contentList}/>
       
      </SafeAreaView>
    </Background>
  );
}
