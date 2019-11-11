import React, { PureComponent } from 'react';
import autobind from 'react-autobind';

import SurveyPageView from './SurveyPageView';
import surveyList from '../../constants/SurveyQuestions';
import surveyResponse from '../../constants/SurveyResults';
import { registerEvent } from '../../api/googleAnalytics';
import { SURVEY_COMPLETED } from '../../constants/googleAnalytics';

class SurveyPageContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 1,
      answers: [],
      answer: '',
      isLoading: false,
      surveyComplete: false
    };
    autobind(this);
  }

  onAnswer = answer => {
    this.setState({
      answers: [...this.state.answers, answer],
      questionNumber: this.state.questionNumber + 1
    });
  };

  reDoSurvey = () => {
    this.setState({
      questionNumber: 1,
      answers: [],
      answer: '',
      isLoading: false,
      surveyComplete: false
    });
  };

  onCompletion = () => {
    const { answers } = this.state;
    const strategy =
      surveyResponse[answers[0]][answers[1]][answers[2]][answers[3]];
    return strategy;
  };

  submitResults = () => {
    this.setState({ isLoading: true, surveyComplete: false });
    registerEvent({ category: SURVEY_COMPLETED });
    const result = this.onCompletion();
    setTimeout(() => {
      this.setState({ isLoading: false, surveyComplete: true, answer: result });
    }, 1500);
  };

  render() {
    const { questionNumber, isLoading, answer, surveyComplete } = this.state;
    return (
      <SurveyPageView
        questionNumber={questionNumber}
        isLoading={isLoading}
        onAnswer={this.onAnswer}
        onCompletion={this.onCompletion}
        surveyList={surveyList}
        reDoSurvey={this.reDoSurvey}
        submitResults={this.submitResults}
        surveyComplete={surveyComplete}
        answer={answer}
      />
    );
  }
}

export default SurveyPageContainer;
