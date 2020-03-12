import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import FormPage from './FormPage';
import Grid from './Grid';
import TopNav from './TopNav';
import BrandsList from './BrandsList';

const App=()=>{
return(
    <div>
      <TopNav/>
      <FormPage/>
      {/* <Grid/> */}
      <BrandsList/>
      <Footer/>
   
   
   </div>
);
};

ReactDOM.render( <App/>,document.querySelector('#root'));
   


