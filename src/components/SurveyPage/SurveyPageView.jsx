import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Link from 'react-router-dom/Link';

import styles from './SurveyPageView.module.css';

const SurveyPageView = ({ ...props }) => {
    const { questionNumber, onAnswer, onCompletion, surveyList } = props;
    
    const questionaire = (questionNumber) => {
        if (surveyList.length < questionNumber) {
            const result = onCompletion();
            return (
                <div className={styles.containerPadding}>
                <Container>
                   <h4>We calculated the best strategy for you is
                   {' '}
                   <Link
                    to={`/baskets/${result}`}
                   >
                    {result}
                   </Link>
                   </h4>
                </Container>
                </div> 
            );
        }

        const questions = surveyList.map(item => {
          return(
              <div className={styles.containerPadding}>
              <Container key={questionNumber}>
                    <h4>
                        {item.question}
                    </h4>
                    <br />
                    <ol>
                        {item.options.map(option => {
                            return (
                                <li className={styles.buttonspacing}>
                                    <Button variant="outline-primary" onClick={() => onAnswer(option.key)}>
                                        {option.value}
                                    </Button>
                                </li>
                            );
                        })}
                    </ol>
              </Container>
              </div>
          );
        });

        return questions[questionNumber - 1];
    };

    return questionaire(questionNumber);
};

export default SurveyPageView;
