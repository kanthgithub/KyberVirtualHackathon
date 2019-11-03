import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import isEmpty from 'lodash/isEmpty';

import NavigationBar from '../NavigationBar';
import styles from './SurveyPageView.module.css';
import ZapFullView from '../Baskets/ZapFullView';
import Baskets from '../../constants/Baskets';

const SurveyPageView = props => {
  const {
    questionNumber,
    onAnswer,
    surveyList,
    reDoSurvey,
    surveyComplete,
    submitResults,
    isLoading,
    answer
  } = props;

  const generateResult = () => {
    return isEmpty(answer) ? null : (
      <>
        <br /> <br />
        <h4>
          You might find this Zap useful: <br />
        </h4>
        <ZapFullView
          name={Baskets[answer].name}
          components={Baskets[answer].components}
          isOrderable={Baskets[answer].isOrderable}
          description={Baskets[answer].description}
        />
        <Row className="justify-content-center pb-3">
          <Button
            variant="outline-dark"
            target="_blank"
            href="https://defizap.typeform.com/to/UZSZg5"
            type="link"
            size="lg"
          >
            Don&apos;t see your Zap? <br />
            Submit a request and we will create one!
          </Button>
        </Row>
      </>
    );
  };

  const surveyCompleted = () => (
    <>
      <div key={questionNumber}>
        <Container>
          <NavigationBar />
          {surveyComplete ? (
            <>
              <Button
                variant="outline-dark"
                onClick={reDoSurvey}
                className={styles.buttonspacing}
                size="lg"
              >
                Start Over
              </Button>
              <Button variant="outline-dark" href="/zaps" size="lg">
                Explore all Zaps
              </Button>
            </>
          ) : (
            <Button
              variant="outline-dark"
              onClick={submitResults}
              className={styles.buttonspacing}
              size="lg"
            >
              Get Results
            </Button>
          )}
          {isLoading ? (
            <>
              <br />
              <Spinner animation="grow" />
              <Spinner animation="grow" />
              <Spinner animation="grow" />
              <Spinner animation="grow" />
              <Spinner animation="grow" />
            </>
          ) : (
            generateResult()
          )}
        </Container>
      </div>
    </>
  );

  const questions = () => {
    const questionsList = surveyList.map(item => {
      return (
        <>
          <div key={questionNumber}>
            <Container key={questionNumber}>
              <NavigationBar />
              {questionNumber === 1 ? (
                <>
                  <h4>
                    Answer a few multiple choice questions to see which Zap
                    might fit your needs:
                  </h4>
                  <br />
                </>
              ) : null}
              <h4>{item.question}</h4>
              <h5 style={{ fontSize: 15 }}>
                Question {questionNumber} out of 4
              </h5>
              <ol type="A">
                {item.options.map(option => {
                  return (
                    <li key={option.value} className={styles.buttonspacing}>
                      <Button
                        variant="outline-dark"
                        size="lg"
                        onClick={() => onAnswer(option.key)}
                      >
                        {option.value}
                      </Button>
                    </li>
                  );
                })}
              </ol>
              <br />
              <h5 style={{ fontSize: 15 }}>
                DISCLOSURE: THIS IS NOT INVESTMENT ADVICE. DO NOT MAKE
                INVESTMENT DECISIONS SOLELY BASED ON
              </h5>
              <h5 style={{ fontSize: 15 }}>
                RESULTS GENERATED BY THIS TOOL. THIS PROJECT IS IN BETA. USE AT
                YOUR OWN DISCRETION.
              </h5>
            </Container>
          </div>
        </>
      );
    });
    return questionsList[questionNumber - 1];
  };

  const questionaire = () => {
    return (
      <div className={styles.background}>
        {surveyList.length >= questionNumber ? questions() : surveyCompleted()}
      </div>
    );
  };

  return questionaire(questionNumber);
};

export default SurveyPageView;
