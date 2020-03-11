import React from 'react';

const footer=()=>{
return(

<div className= 'container-fluid'>
    {/* First Div  */}


<div className = "row" style={{padding:'25px',backgroundColor:'#E3E2DF',marginTop:'-20px'}}>
<div  className = "col-sm-6">
<h3 style={{marginLeft:'100px', fontFamily:'sans-serif',fontSize:'20px',color:'black'}}>Mark Yousrelf First To Know</h3>
<h3 style={{marginLeft:'100px', fontFamily:'sans-serif',fontSize:'17px',color:'black'}}>Stay in touch to find out the best offers and exclusive news.</h3>
</div>

<div className="ui input col-sm-6">
<input type="email" placeholder="Type your email..." style={{marginLeft:'-20px',height:'50px'}}></input> 
<button class="ui secondary button" style={{marginRight:'20px',height: '50px'}}>
  Okay
</button>
</div>
</div>

{/* second div */}
<div className="row" style={{marginTop:'20px'}}>
      <div className="col"><ul style={{listStyleType:'none'}}>
<li><a href="#" style={{marginLeft:'40px',color:'black',fontFamily:'sans-serif',fontSize:'19px',fontWeight:'bold'}}>
Help
</a></li>
<li><a href="#" style={{marginLeft:'40px',color:'#666666',fontFamily:'sans-serif',marginTop:'3px',fontSize:'15px'}}>
Contact Us
</a></li>


</ul></div>

      <div className="col"><ul style={{listStyleType:'none'}}>
<li><a href="#" style={{color:'black',fontFamily:'sans-serif',fontSize:'19px',fontWeight:'bold'}}>
Ways to shop
</a></li>
<li><a href="#" style={{color:'#666666',fontFamily:'sans-serif',marginTop:'3px',fontSize:'15px'}}>
About
</a></li>
<li><a href="#" style={{color:'#666666',fontFamily:'sans-serif',marginTop:'30px',fontSize:'15px'}}>
FAQS
</a></li>
<li><a href="#" style={{color:'#666666',fontFamily:'sans-serif',marginTop:'55px',fontSize:'15px'}}>
Payments
</a></li>
</ul></div>

      <div className="col"><ul style={{listStyleType:'none'}}>
<li><a href="#" style={{color:'black',fontFamily:'sans-serif',fontSize:'19px',fontWeight:'bold'}}>
Customer Care
</a></li>
<li><a href="#" style={{color:'#666666',fontFamily:'sans-serif',marginTop:'3px',fontSize:'15px'}}>
0316-0022324
</a></li>
<li><a href="#" style={{color:'#666666',fontFamily:'sans-serif',marginTop:'30px',fontSize:'15px'}}>
care@Pehnaway.com
</a></li>
<li><a href="#" style={{color:'#666666',fontFamily:'sans-serif',marginTop:'55px',fontSize:'15px'}}>
Payments
</a></li>
</ul></div>

      <div className="col"><ul style={{listStyleType:'none'}}>
<li><a href="#" style={{marginLeft:'40px',color:'black',fontFamily:'sans-serif',fontSize:'19px',fontWeight:'bold'}}>
My Account
</a></li>
<li><a href="#" style={{marginLeft:'40px', color:'#666666',fontFamily:'sans-serif',marginTop:'3px',fontSize:'15px'}}>
Account info
</a></li>
<li><a href="#" style={{marginLeft:'40px',color:'#666666',fontFamily:'sans-serif',marginTop:'30px',fontSize:'15px'}}>
Addresses
</a></li>
<li><a href="#" style={{marginLeft:'40px',color:'#666666',fontFamily:'sans-serif',marginTop:'55px',fontSize:'15px'}}>
Order history
</a></li>
</ul></div>







<div className='col' style={{marginLeft:'10px'}}>
<ul style={{listStyleType:'none'}}>
<li><a href="#" style={{color:'black',fontFamily:'sans-serif',fontSize:'19px',fontWeight:'bold'}}>
Follow Us
</a></li>
<li><a href="#" style={{color:'#666666',fontFamily:'sans-serif',marginTop:'3px',fontSize:'15px'}}>
<img src="https://www.alkaramstudio.com/skin/frontend/alkaramv3/default/images/facebook-icon.svg"
 style={{width:"40px",height:"40px"}}>     
</img>
</a></li>
<li><a href="#" style={{marginLeft:'42px',position:'absolute',color:'#666666',fontFamily:'sans-serif',marginTop:'-40px',fontSize:'15px'}}>
<img src="https://www.alkaramstudio.com/skin/frontend/alkaramv3/default/images/twitter-icon.svg"
 style={{width:"40px",height:"40px"}}>     
</img>
</a></li>
<li><a href="#" style={{marginLeft:'84px',position:'absolute',color:'#666666',fontFamily:'sans-serif',marginTop:'-40px',fontSize:'15px'}}>
<img src="https://www.alkaramstudio.com/skin/frontend/alkaramv3/default/images/youtube-icon.svg"
 style={{width:"40px",height:"40px"}}>     
</img>
</a></li>
<li><a href="#" style={{marginLeft:'126px',position:'absolute',color:'#666666',fontFamily:'sans-serif',marginTop:'-40px',fontSize:'15px'}}>
<img src="https://www.alkaramstudio.com/skin/frontend/alkaramv3/default/images/instagram-icon.svg"
 style={{width:"40px",height:"40px"}}>     
</img>
</a></li>

</ul>

</div>
</div>
<hr style={{height:'0.5px',backgroundColor:'#666666',width:'105%'}}></hr>

<div className = 'row' style={{marginBottom:'10px'}}>
<div className='col-6'>     
<a style={{marginLeft:'300px',letterSpacing:'2px',fontSize:'13px',color:'black',fontWeight:'bold'}} href="#">Terms Conditions</a>    
<a style={{ letterSpacing:'2px',fontSize:'13px',color:'black',fontWeight:'bold'}} href="#">.Privacy Policy</a>
</div>

<div className='col-6'>    
<a style={{marginLeft:'200px',letterSpacing:'2px',fontSize:'13px',color:'black',fontWeight:'bold'}} href="#">.Privacy Policy</a>
</div>
</div>










</div>
);
};
export default footer;