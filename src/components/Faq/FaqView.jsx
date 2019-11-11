import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import '../../App.css';
import AccordionToggle from 'react-bootstrap/AccordionToggle';
import styles from './Faq.module.css';
import { GENERATE_ZAP, FAQ_PAGE } from '../../constants/googleAnalytics';
import { registerEvent } from '../../api/googleAnalytics';

const HeaderButton = props => (
  <Button variant="outline-link" onClick={props.onClick}>
    {props.children}
  </Button>
);

const FaqView = props => {
  const { defaultActiveKey } = props;
  return (
    <Container>
      <Accordion defaultActiveKey={defaultActiveKey}>
        <Card className={styles.cardStyle}>
          <AccordionToggle as={HeaderButton} eventKey="0">
            <h4>What is a Zap?</h4>
          </AccordionToggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                Zap is a smart contract that auto-spreads incoming deposits
                across multiple DeFi protocols based on pre-set allocations,
                bypassing many manual steps. You can send ETH to a Zap contract
                of your choosing and receive allocated tokens. For example,
                Lender&apos;s Zap allocates incoming deposits 90% to cDai and
                10% to dLETH2x. Therefore, if you send 1 ETH to this Zap, you
                will receive 0.9 ETH&apos;s worth of cDai and place a 2X margin
                trade with 0.1 ETH on Fulcrum (giving you exposure to 0.2 ETH).
                Lender&apos;s Zap is interesting because, within a year, the
                interest generated from cDai could completely cover your margin
                trade purchase.Think of it as trading with your future interest
                earned.{' '}
              </p>
              <p>
                Lender&apos;s Zap is live on the mainnet and we’ve registered
                Lender.DefiZap.eth on The Ethereum Name Service so that
                investing into Compound + Fulcrum is as easy as sending a
                deposit from your wallet.
              </p>
              <p>
                We&apos;ve also created a &apos;Zap Generator&apos; to help
                end-users filter available Zaps based on their investment goals
                and risk profile. Users answer a few multiple-choice questions
                to see which Zap might fit their needs. Some combinations are
                still being finalized so please do not take this as investment
                advice.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.cardStyle}>
          <AccordionToggle as={HeaderButton} eventKey="1">
            <h4>Can I change my assets and allocations?</h4>
          </AccordionToggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                Ultimately, we intend to allow our users to be able to create
                their own Zaps, based on their custom requirements. In the
                meantime, you can submit a request by{' '}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/DeFiStrategies/ZapRequests/issues/new"
                >
                  creating a new issue on our Github.
                </a>
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.cardStyle}>
          <AccordionToggle as={HeaderButton} eventKey="2">
            <h4>Where can I view my purchased assets?</h4>
          </AccordionToggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>
                Once your transaction is confirmed, your purchased assets (based
                on chosen Zap’s allocations) will show up in your wallet as
                ERC20 tokens. We are working on our own dashboard UI but for now
                you can visit websites of your purchased assets:{' '}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://app.compound.finance/"
                >
                  Compound
                </a>
                .{' '}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://fulcrum.trade/#/trade"
                >
                  Fulcrum
                </a>
                .{' '}
                <a
                  href="https://www.tokensets.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {' '}
                  TokenSets
                </a>{' '}
                (Coming soon).{' '}
                <a
                  href="https://www.synthetix.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {' '}
                  Synthetix
                </a>
                . (Coming soon).
                <a
                  href="https://dydx.exchange/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {' '}
                  dYdX
                </a>
                . (Coming soon).
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.cardStyle}>
          <AccordionToggle as={HeaderButton} eventKey="3">
            <h4>How much does this cost?</h4>
          </AccordionToggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>
                DeFiZap does not charge any fees for investing through Zaps and
                all smart contract code is open sourced.
              </p>
              <p>
                Furthermore, accessing DeFi protocols through Zaps costs less
                gas than individually transacting on each one to accomplish the
                same result. For example, going from ETH to cDai on Compound and
                ETH to LONG2xBZX on Fulcrum will end up costing you ~$3-$5 in
                gas fees.
              </p>
              <p>
                Lender&apos;s Zap helps you accomplish ETH to cDai + LONG2xBZX
                in one transaction, for ~$0.86-$1.76.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.cardStyle}>
          <AccordionToggle as={HeaderButton} eventKey="4">
            <h4>What’s next for DeFiZap?</h4>
          </AccordionToggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p>-Launch a simple DeFiZap Dashboard UI.</p>
              <p>
                -We are starting with ETH only deposits but will soon integrate
                Wyre to enable deploying capital into DeFi straight from your
                bank account.
              </p>
              <p>
                -Automatic Investment Plans - connect your bank accounts and set
                up recurring deposits to chosen Zap(s).
              </p>
              <p>
                -‘Anti-Zaps’ which essentially sell your allocated investments
                to an asset of your choice.{' '}
              </p>
              <p>
                -Unique tokens for each Zap which end users receive to track
                their overall balances and overall ROI.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Row className="justify-content-center pb-2">
        <Button
          variant="primary"
          target="_blank"
          size="lg"
          href="https://defizap.typeform.com/to/UZSZg5"
          type="link"
          className="mx-3"
          block
          onClick={() =>
            registerEvent({
              category: GENERATE_ZAP,
              action: FAQ_PAGE
            })}
        >
          Don&apos;t see your Zap? Submit a request and we will create one!
        </Button>
      </Row>
    </Container>
  );
};

export default FaqView;
