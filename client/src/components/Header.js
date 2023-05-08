import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import styles from './Header.module.css'
import Button from './UI/Button'


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li> <Button primary> <a href="/auth/google">구글로 로그인</a> </Button></li>
      default:
        return [
          <li className={styles.pay_button} key="1"><Payments /></li>,
          <li className={styles.coin_count} key="2" >
            코인: {this.props.auth.credits}
          </li>,
          <li className={styles.log_button} key="3"> <Button secondary> <a href="/api/logout">로그아웃</a> </Button> </li>
        ];
    }
  }

  render() {
    return (
      <nav className={styles.header}>
        <Link
          to={this.props.auth ? '/surveys' : '/'}
          className={styles.header_link}
        >
          애프터바이
        </Link>
          <ul className={styles.logbox}>
            {this.renderContent()}
          </ul>
      </nav>
    );
  }
}



function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
