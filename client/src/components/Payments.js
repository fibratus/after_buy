// import React, {Component} from 'react';
// import StripeCheckout from 'react-stripe-checkout'

// class Payments extends Component {
//   render() {
//     return (
//       <div>
//         <StripeCheckout amount={500} token={} stripeKey={process.env.REACT_APP_STRIPE_KEY} />        
//       </div>
//     );
//   }
// }

// export default Payments;

import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="afterbuy"
        description="$5 지불하면 5개 이메일 설문지를 보낼 수 있어요."
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          크레딧 구매하기
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
