import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play Dice Game</h2>
      <div className="text">
        <p>Step 1: Select any Number</p>
        <p>Step 2: Click on Dice Image</p>
        <p>
            #After click on Dice if selected Number is Equal to Dice Number .... You will get same point as Dice...
        </p>
        <p>#If you get wrong guess then 2 points will be deducted</p>
      </div>

    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #ce389241;
    padding: 20px;
    margin-top: 48px;
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top:24px ;
    }
`;

