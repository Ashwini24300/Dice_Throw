import styled from "styled-components";

const RoleDice = ({currentDice,roleDice}) => {


 


  return (
    <ImgContainer>
      <div className="dice" onClick={roleDice}>
      <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to Roll</p>
    </ImgContainer>
  )
}

export default RoleDice;

const ImgContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice{
    cursor: pointer;
  }

  p{
    font-size: 24px;
  }

`;
