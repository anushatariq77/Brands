import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import GridItem from './GridItem';

const data =[
    {
      name:'ALKARAM STUDIO',
      img:'ak.png'
    },
    {
      name:'ASIM JOFA',
      img:'as.png'
    },
    {
      name:'CHARIZMA',
      img:'ch.png'
    },
    {
      name:'DHANAK',
      img:'dn.png'
    },
    {
      name:'OUTFITTERS',
      img:'OT.png'
    },
    {
        name:'ALKARAM STUDIO',
        img:'ak.png'
      },
      {
        name:'ASIM JOFA',
        img:'as.png'
      },
      {
        name:'CHARIZMA',
        img:'ch.png'
      },
      {
        name:'DHANAK',
        img:'dn.png'
      },
      {
        name:'OUTFITTERS',
        img:'OT.png'
      },
]
 


class BrandsList extends Component {

    renderList=()=>{
        return data.map((item)=>{
            return <GridItem name={item.name} img={item.img}/>
        })
    }



    render() {
        return (
            <div>
                <Grid columns={4}  relaxed container style={{ width: '100%', margin:'auto'}}>
                    {this.renderList()}
                </Grid>
                
            </div>
        );
    }
}

export default BrandsList;