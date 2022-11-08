import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">구글로 로그인하기</a></li>
        )
      default:
        return <li><a>로그아웃</a></li>
    } 
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">애프터바이</Link>
          <ul className="right">
            <li>
              {this.renderContent()}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}) {
  return {auth}
}

export default connect()(Header);