import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import styles from './Landing.module.css'
import logo from '../assets/images/logo.png'

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
          <li key="2" style={{ margin: '0 1rem' }}>
            코인: {this.props.auth.credits}
          </li>,
          <li key="3"><a href="/api/logout">로그아웃</a></li>
        ];
    }
  }

  render() {
    return (
      <nav className={styles.navwrapper}>
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
