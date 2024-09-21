'use client';

import React, { useState } from 'react';
import WeatherCard from '@/components/CardWheather';
import JoinCard from '@/components/JoinCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page2.css';
import cielbleu from '@/public/assets/cielbleu.jpg';
import fewnuage from '@/public/assets/fewnuage.jpg';
import nuageparsé from '@/public/assets/nuagefragmenté.jpg';
import nuagebrisé from '@/public/assets/nuagebrisé.jpg';
import pluietorrentiel from '@/public/assets/pluiedaverse.jpg';
import pluie from '@/public/assets/pluie.jpg';
import orage from '@/public/assets/orage.jpg';
import neige from '@/public/assets/neige.jpg';
import brume from '@/public/assets/brume.jpg';
import pluielegere from '@/public/assets/pluielegere.jpg';
import cielnuageux from '@/public/assets/cielnuageux.jpg';


export default function Home() {

  const [backgroundImage, setBackgroundImage] = useState(cielbleu);

  const updateBackgroundImage = (description) => {
    switch (description) {
      case 'Ciel dégagé':
        setBackgroundImage(cielbleu);
        break;
      case 'Quelques nuages':
        setBackgroundImage(fewnuage);
        break;
      case 'Nuages dispersés':
        setBackgroundImage(nuageparsé);
        break;
      case 'Nuages fragmentés':
        setBackgroundImage(nuagebrisé);
        break;
      case 'Pluie torrentielle':
        setBackgroundImage(pluietorrentiel);
        break;
      case 'Pluie':
        setBackgroundImage(pluie);
        break;
      case 'Orage':
        setBackgroundImage(orage);
        break;
      case 'Neige':
        setBackgroundImage(neige);
        break;
      case 'Brume':
        setBackgroundImage(brume);
        break;
      case 'Pluie légère':
        setBackgroundImage(pluielegere);
        break;
      case 'Nuageux':
        setBackgroundImage(cielnuageux);
        break;
      case 'Pluie modérée':
        setBackgroundImage(pluie);
        break;
      default:
        setBackgroundImage(cielbleu);
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const contentContainerStyle = {

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',  // Place les cartes côte à côte
    justifyContent: 'center',
    alignItems: 'center',
    gap: '100px',  // Ajoute un espace entre les cartes
  };

  return (
    <div className='body' style={backgroundStyle}>
      {/* <Navbar />  */}
      <div style={contentContainerStyle}>
        <div style={cardsContainerStyle}>
          {/* <WeatherCard updateBackgroundImage={updateBackgroundImage} /> */}
          <JoinCard />
        </div>
        {/* < Footer /> */}
      </div>
    </div>
  );
}


