import React from 'react';
import CarouselHome from '../components/CarouselHome';
import MenuNav from '../components/MenuNav';
import Banner from '../components/Banner';
import Title from '../components/Title';
import Footer from '../components/Footer';

export default function Home() {
  return (
  <>
    <MenuNav/>
    <Banner/>
    <Title title="Some Pokemons"/>
    <CarouselHome/>
    <Footer/>
  </>
  )
}
