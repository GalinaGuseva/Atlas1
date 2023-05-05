import React from 'react';
import FirstScreen from '../FirstScreen/FirstScreen';
import Preferences from '../Preferences/Preferences';
import About from '../About/About';
import Tocall from '../Tocall/Tocall';
import Quest from '../Quest/Quest';
import CallToAction from '../CallToAction/CallToAction';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <>      
      <FirstScreen />      
      <About />
      <Preferences />
      <Tocall/> 
      <Quest />
      <CallToAction/>
      <Footer/>      
    </>
  );
};

export default Main;
