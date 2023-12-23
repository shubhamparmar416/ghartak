import React from 'react'; 
import SEO from '../components/common/seo';
import Wrapper from '../layout/wrapper';
import HomeSeven from '../components/homes/home-7';

const index = () => {
  return (
    <Wrapper> 
    <SEO pageTitle={"Ghartak Tech"} />
     <HomeSeven />
    </Wrapper>
  );
};

export default index; 