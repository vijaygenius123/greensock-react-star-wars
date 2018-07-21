import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { TimelineLite, Power2 } from 'gsap';

class App extends Component {

  constructor(props){
    super(props);
    this.intro = React.createRef();
    this.logo = React.createRef();

  }

  componentDidMount(){
    const tl = new TimelineLite();

    tl.to(this.intro.current, 4.5, { opacity :1, delay: 1})
    .to(this.intro.current, 1.5, {opacity:0})
    .set(this.logo.current, { opacity: 1, scale: 2.75})
    .to(this.logo.current, 8,{
      scale: 0.25,
      ease: Power2.easeOut
    })
    .to(this.logo.current, 1.5, {opacity:0}, "-1.5")
  }

  render() {
    return (
      <div className="container">
        <section className="intro" ref={this.intro}>
          <p> 
            Hello Greensock
          </p>
        </section>
        <section className="logo" ref={this.logo}>
          <img src={logo} />
        </section>
      </div>
    );
  }
}

export default App;
