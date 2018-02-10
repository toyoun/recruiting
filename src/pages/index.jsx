import React from 'react';
import logo from '../assets/logo.png';
import teamWhite from '../assets/teamWhite.jpg';
import teamColor from '../assets/teamColor.jpg';
import animatedTeam from '../assets/team.gif';

const IndexPage = () => (
  <div>
    <header
      style={{
        width: '100vw',
        height: '100vh',
        background: `url(${teamWhite})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        display: 'grid',
        gridTemplateColumns: '9.58% [logo] 9.84% 20.99% [content] 50% 9.58%',
        gridTemplateRows: '12.9% [logo]12% 6.5% [content]55% 12.9%',
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          gridColumnStart: 'logo',
          gridRowStart: 'logo',
        }}
      />
      <h1
        style={{
          display: 'none',
        }}
      >
        SLO Hacks
      </h1>
      <h2
        style={{
          gridColumnStart: 'content',
          gridRowStart: 'content',
        }}
      >
        We&apos;re recruiting!
      </h2>
      <img
        src={animatedTeam}
        alt="SLO Hacks Team"
        style={{
          gridColumnStart: 'logo',
          gridColumnEnd: 4,
          gridRowStart: 'content',
          alignSelf: 'end',
          marginBottom: 0,
          maxHeight: '100%',
          maxWidth: '100%',
        }}
      />
    </header>
    <div
      style={{
        width: '100vw',
        height: '20vh',
        background: `url(${teamColor})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    />
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  </div>
);

export default IndexPage;
