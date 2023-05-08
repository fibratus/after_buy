import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className="container">
    <SurveyList />
      <div>
        <Link to="/surveys/new" className={styles.btn_add}>
          <ion-icon name="add-circle-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
