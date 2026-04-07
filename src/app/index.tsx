import React from 'react';
import Screen from '@/components/ui/Screen';
import BrandHeader from '@/components/ui/BrandHeader';
import logo from "../../assets/logo.png"
import ItemTask from '@/components/ui/ItemTask';
import { FlatList, Text } from 'react-native';

export default function Home() {
  const info =["hola", "adios"]
  return (
    <Screen>
      <BrandHeader
        title="Mi App"
        subtitle="Bienvenido"
        logo={logo} />
      <FlatList data={info} renderItem={({item}) => <ItemTask title={item} /> }/>
    </Screen>
  );

}







