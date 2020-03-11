 //import react libraries
 import React, { Component } from 'react';



 class TopNav extends Component{ 
   render(){
    return(
      <div>
        <div>
         <center><img src="logo.jpg" style={{width:'8%'}}></img></center> 
         <div style={{textAlign:'right'}}>
      <p style={{marginTop:'-20px',position:'relative', marginRight:'130px' , fontFamily:'helvatica'}}><i class="edit outline icon">
        </i>Register</p>
      <p style={{marginTop:'-32px',position:'relative',marginRight:'10px',fontFamily:'helvatica'}}><i class="opencart icon"></i>Shopping Cart</p>
    </div> 
        </div>

<center><nav style={{backgroundColor:'white',marginTop:'30px',width:'60%',height:'5vh'}}>
  <ul >
    <li style={{display: 'inline-block', fontFamily:'helvatica',fontWeight:'lighter',marginLeft:'-10px'}}>
      NEW ARRIVALS
    </li>
    <li style={{display: 'inline-block', fontFamily:'helvatica',fontWeight:'lighter',marginLeft:'30px'}}>
   UNSTITCHED
   
    </li>
    <li style={{display: 'inline-block', fontFamily:'helvatica',fontWeight:'lighter',marginLeft:'30px'}}>
    STITCHED
    </li>
    <li style={{display: 'inline-block', fontFamily:'helvatica',fontWeight:'lighter',marginLeft:'30px'}}>
    LAWN
   
    </li>
    <li style={{display: 'inline-block', fontFamily:'helvatica',fontWeight:'lighter',marginLeft:'30px'}}>
     FANCY
   
    </li>
    <li style={{display: 'inline-block', fontFamily:'helvatica',fontWeight:'lighter',marginLeft:'30px'}}>
     KURTI
   
    </li>
    <li style={{display: 'inline-block', fontFamily:'helvatica',fontWeight:'lighter',marginLeft:'30px'}}>
     BRANDS
   
    </li>
    <li style={{display: 'inline-block', fontFamily:'helvatica',fontWeight:'lighter',marginLeft:'90px'}}>
     </li>
  </ul>
</nav>
</center>

</div>
    );
   }
     
 
 }
 export default TopNav;
 