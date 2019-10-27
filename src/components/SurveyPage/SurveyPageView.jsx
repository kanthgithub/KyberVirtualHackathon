import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Link from 'react-router-dom/Link';
import isEmpty from 'lodash/isEmpty';

import NavigationBar from '../LandingPage/Navbar'
import styles from './SurveyPageView.module.css';
import '../../App.css';

const SurveyPageView = ({ ...props }) => {
    const { questionNumber, onAnswer, surveyList, reDoSurvey,
                submitResults, isLoading, answer } = props;
    
    const questions = () => {
        const questions = surveyList.map(item => {
            return (
                  <>
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
                  </>
            );
        });
        return questions[questionNumber - 1];
    };

    const generateResult = () => {
        return(
            isEmpty(answer) ? null : (
                <>
                    <br /> < br/>
                    <h4 style={{ color: "white" }}>
                        Based on your answer, the best strategy for you is {' '}
                        <Link
                            to={`/zaps/${answer}`}
                        >
                            {answer}
                        </Link>
                    </h4>
                </>
            )
        );
    }

    const questionaire = (questionNumber) => {
        return (
                <div
                    className="hero-image"
                    style={{
                    height: "1000px",
                    marginBottom: "100px"
                    }}
                >
                    <div className={styles.containerPadding} style={{ paddingTop: "150px" }}>
                    {
                        surveyList.length >= questionNumber ? questions() :
                        (
                            <>
                                <NavigationBar/>
                                <div key={questionNumber} className={styles.containerPadding}>
                                    <Container>
                                        <Button
                                            variant="outline-light"
                                            onClick={reDoSurvey}
                                            className={styles.buttonspacing}
                                        >
                                            Redo the Survey
                                        </Button>
                                        {' '}
                                        <Button
                                            variant="outline-light"
                                            onClick={submitResults}
                                            className={styles.buttonspacing}
                                        >
                                            Get Results
                                        </Button>
                                        {
                                            isLoading ? (
                                                <>
                                                    <Spinner animation="grow" variant="light" />
                                                    <Spinner animation="grow" variant="light" />
                                                    <Spinner animation="grow" variant="light" />
                                                    <Spinner animation="grow" variant="light" />
                                                    <Spinner animation="grow" variant="light" />
                                                </>
                                            ) : (generateResult())
                                        }
                                    </Container>
                                </div>
                            </>
                        )
                    }
                    </div>
                </div>
        );
    };

    return questionaire(questionNumber);
};

export default SurveyPageView;

