import React, { PureComponent } from 'react';
import autobind from 'react-autobind';

import SurveyPageView from './SurveyPageView';
import surveyList from '../../constants/SurveyQuestions'
import surveyResponse from '../../constants/SurveyResults';

class SurveyPageContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 1,
            answers: ['conservative','beginner','shortTerm','bull'],
            answer: '',
            isLoading: false,
            surveyComplete: false,
        };
        autobind(this);
    };

    onAnswer = (answer) => {
        this.setState({
            answers: [ ...this.state.answers, answer],
            questionNumber: this.state.questionNumber + 1,
        });
    };

    reDoSurvey = () => {
        this.setState({
            questionNumber: 1,
            answer: '',
        });
    };

    onCompletion = () => {
        const {answers} = this.state;
        const strategy = surveyResponse[answers[0]][answers[1]][answers[2]][answers[3]];
        return strategy;
    };

    submitResults = () => {
        this.setState({ isLoading: true, surveyComplete: true });
        const result = this.onCompletion();
        setTimeout(() => {
           this.setState({ isLoading: false, answer: result })
         } , 1500);
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
                answer={answer}
                surveyComplete={surveyComplete}
            />
        );
    }
}

export default SurveyPageContainer;
