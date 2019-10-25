import React, { PureComponent } from 'react';
import autobind from 'react-autobind';

import SurveyPageView from './SurveyPageView';
import surveyList from './SurveyQuestions';

class SurveyPageContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 1,
            answers: {},
        };
        autobind(this);
    };

    onAnswer = (questionNumber, answer) => {
        this.setState({
            answers: { ...this.state.answers, [questionNumber]: answer },
            questionNumber: this.state.questionNumber + 1,
        });
    };

    render() {
        const { questionNumber } = this.state;
        return (
            <SurveyPageView
                questionNumber={questionNumber}
                onAnswer={this.onAnswer}
                surveyList={surveyList}
            />
        );
    }
}

export default SurveyPageContainer;
