import React from 'react'
import io from 'socket.io-client'
import axios from '../../utils/axios'


class WSReader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      socket: io.connect('http://localhost:3030/api-1.0')
    }

    this.attachHandlers(this.state.socket)
    this.getDataWS = this.getDataWS.bind(this)
    this.getDataRest = this.getDataRest.bind(this)
  }

  attachHandlers(socket) {
  
    socket.on('connect', () => {
      console.log(socket.connected);
    });

  
  }

  getDataWS() {
    console.time('getDataWS');
    this.state.socket.emit('getData', {message: 'anydata'}, data => {
      console.log(data)
      console.timeEnd('getDataWS');
    })
  }

  getDataRest() {
    console.time('getDataRest');
    axios.get('/getData')
    .then((data) => {
      console.log(data)
      console.timeEnd('getDataRest');
    })
  }

  render() {
    return (
      <div className={'loader'} style={loaderStyles}>
        <button className='getData' onClick={this.getDataWS} >Get DAtataaWS</button>
        <button className='getData' onClick={this.getDataRest} >Get DAtataaREST</button>
      </div>
    )
  }
}

const loaderStyles = {
  backgroundColor: 'blue',
  width: '50px',
  height: '50px'
}

export default WSReader
