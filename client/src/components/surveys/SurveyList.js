import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import styles from './SurveyList.module.css'

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className={styles.card} key={survey._id}>
          <div className={styles.card_content}>
            <span className={styles.card_title}>설문 제목: {survey.title}</span>
            <p className={styles.card_body}>
              설문 내용: {survey.body}
            </p>
            <p className={styles.date}>
              보낸 날짜: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className={styles.card_action}>
            <a>예: {survey.yes}</a>
            <a> 아니요: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={styles.survey_container}>
        <h1 className={styles.survey_heading}>List of After Buy Surveys</h1>
        <div className={styles.survey_lists}>
        {this.renderSurveys()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
