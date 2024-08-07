import React, { Component } from "react";
import styles from "./index.module.css";

class EvenOddApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleAddRandomNumber = () => {
    let randomNumber = Math.round(Math.random() * 100);

    this.setState((prevState) => ({ count: prevState.count + randomNumber }));
  };

  render() {
    const { count } = this.state;
    let statusText = count % 2 === 0 ? "Even" : "Odd";

    return (
      <div className={styles.mainContainer}>
        <div className={styles.countWrapper}>
          <h1>Count {count}</h1>
          <h3>Count is {statusText}</h3>
          <button onClick={this.handleAddRandomNumber}>Increament</button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    );
  }
}

export default EvenOddApp;
