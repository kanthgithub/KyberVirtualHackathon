import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Link from 'react-router-dom/Link';

import NavigationBar from '../LandingPage/Navbar'
import styles from './SurveyPageView.module.css';
import '../../App.css';

const SurveyPageView = ({ ...props }) => {
    const { questionNumber, onAnswer, onCompletion, surveyList } = props;
    
    const questionaire = (questionNumber) => {
        if (surveyList.length < questionNumber) {
            const result = onCompletion();
            return (
                <div
                className="hero-image"
                style={{
                height: "1000px",
                marginBottom: "100px"
                }}
            >
                <div className={styles.containerPadding} style={{ paddingTop: "150px" }}>
                <Container>
                   <h4 style={{ color: "white" }}>We calculated the best strategy for you is
                   {' '}
                   <Link
                    to={`/baskets#${result}`}
                    hash={`#${result}`}
                   >
                    {result}
                   </Link>
                   </h4>
                </Container>
                </div> 
            </div>
            );
        }

        const questions = surveyList.map(item => {
          return(
            <div
                className="hero-image"
                style={{
                height: "1000px",
                marginBottom: "100px"
                }}
            >
              <div className="container" style={{ paddingTop: "150px" }}>
                <NavigationBar />
                <div key={questionNumber} className={styles.containerPadding}>
                    <Container key={questionNumber}>
                            <h4 style={{ color: "white" }}>
                                {item.question}
                            </h4>
                            <br />
                            <ol>
                                {item.options.map(option => {
                                    return (
                                        <li className={styles.buttonspacing}>
                                            <Button variant="outline-light" onClick={() => onAnswer(option.key)}>
                                                {option.value}
                                            </Button>
                                        </li>
                                    );
                                })}
                            </ol>
                    </Container>        
                </div>
              </div>
            </div>
          );
        });

        return questions[questionNumber - 1];
    };

    return questionaire(questionNumber);
};

export default SurveyPageView;

