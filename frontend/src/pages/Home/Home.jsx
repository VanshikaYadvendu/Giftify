import React, { useState } from 'react';
import './home.css';
import Header from '../../components/Header/header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {
   const [category,setCategory] = useState("All");

  return (
    <div className="home">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
