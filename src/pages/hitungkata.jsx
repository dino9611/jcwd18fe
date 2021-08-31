import React, { Component } from 'react';
import {connect} from 'react-redux'
import { HitungKataAction } from '../redux/actions';

class HitungKata extends Component {
    state = {
        kalimat:'',
        totalkalimat:0,

    }

    componentDidUpdate(prevprops, prevstate){
        if(prevstate.totalkalimat !== this.state.totalkalimat){
            console.log('tes')
        }
    
    }

    onKalimatChange = (e)=>{
        let kalimat = e.target.value
        kalimat = kalimat.split(' ') 
        kalimat = kalimat.filter((val)=>val !== '')
        this.props.HitungKataAction(kalimat.length)
        this.setState({kalimat:e.target.value,totalkalimat:kalimat.length})

        
    }

    render() { 
        return (
            <div className='container pt-3'>
                
                <textarea className='form-control' placeholder='tulis kalimat' onChange={this.onKalimatChange} cols="30" rows="10"></textarea>
                jumlah kata : {this.props.jumlahKata}
            </div>
          );
    }
}

const MapStateToProps = (state)=>{
    return {
      jumlahKata : state.HitungKata
    }
}


 
export default connect(MapStateToProps,{HitungKataAction}) (HitungKata);