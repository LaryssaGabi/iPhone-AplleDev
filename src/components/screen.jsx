import { useState, useEffect } from 'react';
import { AlignJustify, X } from 'lucide-react';
import {
  CaixaRoxa,
  Logo,
  MenuList,
  MenuItem,
  CaixaAzul,
  TituloIphone,
  TituloSecundario,
  Paragrafo,
  Preco,
  BotaoComprar,
  EscolhaCor,
  CorButton,
  Circulo,
  IphoneImagem,
  Main,
  MenuOverlay,
  Header,
  CloseButton, 
} from './styles';
import Azul from '../assets/iphone-azul.png';
import Amarelo from '../assets/iphone-amarelo.png';
import Branco from '../assets/iphone-branco.png';
import Preto from '../assets/iphone-preto.png';
import Vermelho from '../assets/iphone-vermelho.png';
import Roxo from '../assets/iphone-roxo.png';
import LogoIphone from '../assets/logo.png';

function Screen() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isRotated, setRotated] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedColor, setSelectedColor] = useState('#81A5C4');
  const [selectedImage, setSelectedImage] = useState(Azul);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <>
      <Main>
        <CaixaRoxa>
          <Header>
            <Logo src={LogoIphone} alt="Logo" />
            {isMobile ? (
              <AlignJustify
                onClick={toggleMenu}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  transform: isRotated ? 'rotate(90deg)' : 'rotate(0deg)',
                  color: '#A9A9A9',
                }}
                onMouseEnter={() => setRotated(true)}
                onMouseLeave={() => setRotated(false)}
              />
            ) : (
              <MenuList>
                <MenuItem>Mac</MenuItem>
                <MenuItem>iPhone</MenuItem>
                <MenuItem>iPad</MenuItem>
                <MenuItem>Watch</MenuItem>
                <MenuItem>AirPods</MenuItem>
                <MenuItem>Acessórios</MenuItem>
                <MenuItem>Suporte</MenuItem>
              </MenuList>
            )}
          </Header>


          <MenuOverlay isVisible={isMenuVisible}>
            <CloseButton onClick={toggleMenu}>
              <X style={{ cursor: 'pointer', color: '#A9A9A9' }} />
            </CloseButton>
            <MenuList style={{ flexDirection: 'column' }}>
              <MenuItem onClick={toggleMenu}>Mac</MenuItem>
              <MenuItem onClick={toggleMenu}>iPhone</MenuItem>
              <MenuItem onClick={toggleMenu}>iPad</MenuItem>
              <MenuItem onClick={toggleMenu}>Watch</MenuItem>
              <MenuItem onClick={toggleMenu}>AirPods</MenuItem>
              <MenuItem onClick={toggleMenu}>Acessórios</MenuItem>
              <MenuItem onClick={toggleMenu}>Suporte</MenuItem>

            </MenuList>
          </MenuOverlay>
        </CaixaRoxa>

        <CaixaAzul>
          <div>
            <TituloIphone>iPhone 14</TituloIphone>
            <TituloSecundario>Modernidade em suas mãos.</TituloSecundario>
            <Paragrafo>Design inovador. Duas opções de tamanho. Agora com uma nova cor vibrante.</Paragrafo>
            <Preco>A partir de R$ 633,25/mês ou R$ 7.599*</Preco>
            <BotaoComprar>Comprar</BotaoComprar>

            <EscolhaCor>Escolha sua cor:</EscolhaCor>
            <div>
              <CorButton onClick={() => { setSelectedColor('#81A5C4'); setSelectedImage(Azul); }} color="#81A5C4" />
              <CorButton onClick={() => { setSelectedColor('#F7DA47'); setSelectedImage(Amarelo); }} color="#F7DA47" />
              <CorButton onClick={() => { setSelectedColor('#C1C1C1'); setSelectedImage(Branco); }} color="#C1C1C1" />
              <CorButton onClick={() => { setSelectedColor('#272D33'); setSelectedImage(Preto); }} color="#272D33" />
              <CorButton onClick={() => { setSelectedColor('#B50012'); setSelectedImage(Vermelho); }} color="#B50012" />
              <CorButton onClick={() => { setSelectedColor('#EDE7F1'); setSelectedImage(Roxo); }} color="#EDE7F1" />
            </div>
          </div>

          <Circulo style={{ backgroundColor: selectedColor }} />
          <IphoneImagem className="iphone" src={selectedImage} alt="iPhone" />
        </CaixaAzul>
      </Main>
    </>
  );
}

export default Screen;
