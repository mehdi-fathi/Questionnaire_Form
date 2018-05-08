import React, { Component } from 'react';
import Textarea from "../../Scenes/Form/Inputs/textarea"
import Head from "../../Scenes/Form/Head/head"

 class App extends Component {

  render() {
    return (
        <div>
            <Head counter={this.props.counter} question={this.props.question}> </Head>
            <Textarea counter={this.props.counter}></Textarea>
        </div>
    );
  }
}

export default App;
