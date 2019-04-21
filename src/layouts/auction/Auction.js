import React, { Component } from 'react'

// UI Components
import AuctionForm from './AuctionForm.js'

//////////////
// Auction. //
//////////////

class Auction extends Component {
  constructor(props) {
    super(props);

    // Set state.
    this.state = {};
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">

          <h1>Auction</h1>

          <p>
            <strong>Welcome to the Auction</strong>
          </p>

          <p>
            A new auction starts on every hour. You may buy or sell electricity at any point. When the auction ends, you will be compensated or charged accordingly.
          </p>

          <AuctionForm />

        </div>
      </div>
    </main>
    );
  }
}

export default Auction