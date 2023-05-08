import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields';

import styles from './SurveyForm.module.css'
import Button from '../UI/Button'

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <section className={styles.section_surveyform}>
        <div class="container">
        <h1 class="heading_primary">설문지 작성</h1>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}

          <div className={styles.btn_container}>
          <Button secondary>
            <Link className={styles.inner_link}to="/surveys">
            <ion-icon name="arrow-back-outline"></ion-icon>
              뒤로가기
            </Link>
          </Button>
          
          <Button type="submit" primary>
            다음
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </Button>
          </div>
        </form>
        </div>
      </section>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = '해당 칸을 채워야 설문을 전송할 수 있습니다.';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
