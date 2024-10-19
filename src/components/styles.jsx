import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: flex; 
  flex-direction: column;
`;

export const CaixaRoxa = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-bottom: 1px solid #d3d3d3;

  @media screen and (max-width: 552px) {
    flex-direction: column;
    height: auto; 
    padding: 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;



export const MenuList = styled.ul`
  display: flex;
  gap: 100px;
  list-style: none;
  margin-left: 100px;
  transition: max-height 0.3s ease;
  overflow: hidden;
  
  @media screen and (max-width: 1200px) {
    gap: 80px;
  }

  @media screen and (max-width: 1100px) {
    gap: 70px;
  }

  @media screen and (max-width: 1030px) {
    gap: 50px;
  }

  @media screen and (max-width: 905px) {
    gap: 35px;
  }
  
  @media screen and (max-width: 905px) {
    gap: 25px;
  }

  @media screen and (max-width: 769px) {
    gap: 50px;
    margin-top: 40px;
    margin-left: 0; 
    align-items: center; 
  }

  @media screen and (max-width: 740px) {
    gap: 50px;
    margin-top: 40px;
    margin-left: 0; 
    align-items: center; 
  }
  
  @media screen and (max-width: 552px) {
    flex-direction: column;
    margin-top: 40px;
    align-items: center; 
  }
  `;

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  color: #373737;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 1000;
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  box-shadow: 0 4px 8px rgba(0, 0, 20, 0.5);
`;



export const MenuItem = styled.li`
  font-size: 1.1rem;
  font-weight: 400;
  color: #373737; 
  cursor: pointer;
  position: relative; 
  transition: color 0.3s ease-in-out; 


  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    
    &:hover {
     color: #09ae9b; 
    }

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background-color: #09ae9b;
      left: 0;
      bottom: -5px;
      transition: width 0.3s ease-in-out;
    }

    &:hover:after {
      width: 100%; 
    }

    &:active {
      color: #09ae9b; 
      background-color: rgba(9, 174, 155, 0.2); 
    }
  }
`;


export const Logo = styled.img`
  height: 1.5rem;

  @media screen and (max-width: 552px) {
    height: 1.2rem; 
  }
`;

export const CaixaAzul = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  position: relative; 
  padding: 0 50px;


  @media screen and (max-width: 740px) {
    flex-direction: column; 
    padding: 20px; 
    align-items: center;
    height:115vh; 
  }
`;

export const TituloIphone = styled.h1`
  font-size: 30px;

  @media screen and (max-width: 740px) {
    font-size: 24px; 
  }
`;

export const TituloSecundario = styled.h2`
  font-size: 40px;
  margin-top: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 32px; 

  }
`;

export const Paragrafo = styled.p`
  font-size: 15px;
  margin-bottom: 25px;

  @media screen and (max-width: 740px) {
    font-size: 14px; 
  }
`;

export const Preco = styled.h3`
  font-size: 20px;
  color: #626262;
  font-weight: 300;
  margin-bottom: 30px;

  @media screen and (max-width: 740px) {
    font-size: 18px; 
  }
`;

export const BotaoComprar = styled.button`
  background-color: #0071e3;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #005bb5;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 740px) {
    font-size: 18px; 
    padding: 8px 16px; 
  }
`;

export const EscolhaCor = styled.p`
  font-size: 16px;
  color: #3a3a3a;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 15px;

  @media screen and (max-width: 740px) {
    font-size: 14px;
  }
`;

export const CorButton = styled.button`
  margin-left: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  background-color: ${({ color }) => color};

  @media screen and (max-width: 740px) {
    width: 35px; 
    height: 35px;
  }
`;



export const IphoneImagem = styled.img`
  width: 450px;
  margin-top: 100px;
  z-index: 99;

  @media screen and (max-width: 1900px) {
    width: 100%;
    max-width: 400px; 
    height: auto; 
    margin-top: 20px;
  }

  @media screen and (max-width: 740px) {
    width: 290px;
    margin-top: 50px; 
  }

`;

export const Circulo = styled.div`
  width: 100%;
  height: 100%;
  background: #81A5C4;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: circle(600px at right 1000px);

  @media screen and (max-width: 740px) {
    margin-top: 20px;
    height: 108%;
  }


`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10; 
`;
