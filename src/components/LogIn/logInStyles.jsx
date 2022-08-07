import styled from "styled-components";
import { Link } from "react-router-dom";

const bodyColor = "#f3f3fc";
const containerColor = "red";
const firstColor = "rgb(0, 187, 119)";
const firstAltColor = "rgb(0, 153, 85)";

export const Container = styled.div`
 height: 792px;
   position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: #f3f3f3;
  @media screen and (max-width: 580px) {
    position:relative;
    height: 850px;
  
  }
`;

export const FormWrap = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  
  


  @media screen and (max-width: 580px) {
    height: 50%;
  
  }
`;

export const Icon = styled(Link)`
  margin-left: 2rem;
  align-items:start;
  display:flex;
  margin-top: 15px;
  margin-left:40px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
  height:fit-content;
  width:fit-content;
  

  @media screen and (max-width: 480px) {
    margin-left: 1rem;
    margin-top: 0;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 0.62rem;
  }
`;

export const Form = styled.form`
  background: ${containerColor};
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 5rem 2rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 2rem 2rem;
  }
`;

export const H1 = styled.h1`
  margin-bottom: 2.5rem;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #fff;
`;

export const Input = styled.input`
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 4px;
`;

export const Button = styled.button`
  background: ${firstColor};
  padding: 1rem 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 1.5rem;
  color: #fff;
  font-size: 0.8rem;
`;

// export const ArrowForward = styled(MdArrowForward)`
//   margin-left: 8px;
//   font-size: 1.25rem;
// `;

// export const ArrowRight = styled(MdKeyboardArrowRight)`
//   margin-left: 8px;
//   font-size: 1.25rem;
// `;