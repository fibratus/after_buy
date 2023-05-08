import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

import styles from './SurveyFormReview.module.css'
import Button from '../UI/Button'


const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label className={styles.label}>{label}</label>
        <div className={styles.formValues}>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div className={styles.section_surveyformreview}>
      <h5 className="heading_primary">기입한 사항들을 확인해주세요.</h5>
      {reviewFields}
      <div className={styles.btn_container}>
        <Button secondary onClick={onCancel}>
          <ion-icon name="arrow-back-outline"></ion-icon>
          뒤로가기
        </Button>
        <Button primary onClick={() => submitSurvey(formValues, history)} >
          설문조사 전송 <spacer />
        <ion-icon name="mail-outline"></ion-icon>
        </Button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
