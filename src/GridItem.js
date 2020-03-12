import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react';

class GridItem extends Component {
    render() {
        return (
            <Grid.Column mobile={8} tablet={5} computer={4} style={{width:'100%'}}>
                <div className="ui card" style={{margin:'50px 0 0 10px' , boxShadow:'-1px 4px 26px 5px rgba(0,0,0,0.75)' }}>
            <div className="ui slide masked reveal image"  >
              <img src={this.props.img} className="visible content" style = {{ height : '200px'}}/>
              <img src={this.props.img} className="hidden content" style = {{ height : '200px'}}/>
            </div>
            <div className="content" style={{width:"40vh", textAlign:"center"}}>
                <a className="header"  style={{color:"#D79922"}}>{this.props.name}</a>
              <hr ></hr>
            </div>
          </div>
            </Grid.Column>
        );
    }
}

export default GridItem;