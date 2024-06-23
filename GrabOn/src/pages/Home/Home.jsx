import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import SpinWheel from '../../components/Random/SpinWheel';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
        <SpinWheel/>
      <FoodDisplay category={category} />
      <AppDownload />
    </>
  );
};

export default Home;
