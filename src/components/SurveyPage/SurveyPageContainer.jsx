import React, { PureComponent } from 'react';
import autobind from 'react-autobind';

import SurveyPageView from './SurveyPageView';
import surveyList from './SurveyQuestions';
import surveyResponse from './SurveyResults';

class SurveyPageContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 1,
            answers: [],
        };
        autobind(this);
    };

    onAnswer = (answer) => {
        this.setState({
            answers: [ ...this.state.answers, answer],
            questionNumber: this.state.questionNumber + 1,
        });
    };

    onCompletion = () => {
        const {answers} = this.state;
        const strategy = surveyResponse[answers[0]][answers[1]][answers[2]][answers[3]];
        return strategy;
    }

    render() {
        const { questionNumber } = this.state;
        return (
            <SurveyPageView
                questionNumber={questionNumber}
                onAnswer={this.onAnswer}
                onCompletion={this.onCompletion}
                surveyList={surveyList}
            />
        );
    }
}

export default SurveyPageContainer;
