// import React, { Component } from 'react';
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import Payments from './Payments'

// class Header extends Component {
//   renderContent() {
//     switch(this.props.auth) {
//       case null:
//         return;
//       case false:
//         return (
//           <li><a href="/auth/google">구글로 로그인하기</a></li>
//         )
//       default:
//         return [
//           <li><Payments /></li>
//           <li><a href="/api/logout">로그아웃</a></li>
//         ]
//     } 
//   }

//   render() {
//     return (
//       <nav>
//         <div className="nav-wrapper">
//           <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">애프터바이</Link>
//           <ul className="right">
//             <li>
//               {this.renderContent()}
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }

// function mapStateToProps({auth}) {
//   return {auth}
// }

// export default connect()(Header);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">구글로 로그인</a></li>;
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="2" style={{ margin: '0 2rem' }}>
            크레딧: {this.props.auth.credits}
          </li>,
          <li key="3"><a href="/api/logout">로그아웃</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            애프터바이
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
