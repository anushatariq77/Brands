import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import FormPage from './FormPage';
import Grid from './Grid';
import TopNav from './TopNav';

const App=()=>{
return(
    <div>
      <TopNav/>
      <FormPage/>
      <Grid/>
      <Footer/>

    </div>
);
};

ReactDOM.render( <App/>,document.querySelector('#root'));
   


