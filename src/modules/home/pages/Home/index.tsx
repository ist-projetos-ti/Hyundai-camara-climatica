import React, { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return <h1>Home page</h1>;
};

export default Home;
