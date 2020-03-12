import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import GridItem from './GridItem';

const data =[
    {
      name:'ALKARAM STUDIO',
      img:'ak.png'
    },
    {
      name:'KHAADI',
      img:'KD.png'
    },
    {
      name:'GULAHMED',
      img:'GUL.png'
    },
    {
      name:'SAPPHIRE',
      img:'SP.png'
    },
    {
      name:'SANA SAFINAZ',
      img:'SN.png'
    },
    {
        name:'NISHAT LINEN',
        img:'NL.png'
      },
      {
        name:'LIMELIGHT',
        img:'LM.png'
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
        name:'J. JUNAID JAMSHED',
        img:'J.png'
      },
      {
        name:'WARDA',
        img:'WD.png'
      },
      {
        name:'FIRDOUS',
        img:'FS.png'
      },
      {
        name:'CHEN ONE',
        img:'CO.png'
      },
      {
        name:'GENERATON',
        img:'GN.png'
      },
      {
        name:'MARIA B',
        img:'MB.png'
      },
      {
        name:'MOTIFZ',
        img:'MF.png'
      },
      {
        name:'MAUSUMMERY',
        img:'MS.png'
      },
      {
        name:'EDENROBE',
        img:'ED.png'
      },
      {
        name:'BONANZA',
        img:'BZ.png'
      },
      {
        name:'BIN SAEED',
        img:'BS.png'
      },
      {
        name:'EGO',
        img:'EG.png'
      },
      {
        name:'BAREEZE',
        img:'BR.png'
      },
      {
        name:'ETHNIC',
        img:'ET.png'
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