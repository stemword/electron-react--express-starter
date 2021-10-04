import React, { Component } from 'react';
import axios from 'axios';

class Example extends Component {
  getData = () => {
    const url = `http://localhost:5000/api/expense_id/1`
    axios.get(url).then(function (response) {
      console.log(response);
      alert(response.data);
    }).catch((e) => {
      console.error('Somthing went wrong', e);
      alert('Somthing went wrong');
    });
  }

  render() {
    return (
      <>
        <button onClick={this.getData}>Click me to get data from application backend</button>
      </>
    );
  }
}

export default Example;
