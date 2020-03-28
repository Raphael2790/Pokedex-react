import React from 'react';
import CarouselHome from '../components/CarouselHome';
import MenuNav from '../components/MenuNav';
import Banner from '../components/Banner';
import Title from '../components/Title';
import Footer from '../components/Footer';
import ListGenerations from '../components/ListGenerations';

export default function Home() {
  return (
  <>
    <MenuNav/>
    <Banner/>
    <ListGenerations/>
    <Title title="Some Pokemons"/>
    <CarouselHome/>
    <Footer/>
  </>
  )
}
