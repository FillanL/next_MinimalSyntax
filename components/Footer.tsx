import styled from "styled-components";
const Footer = () => {
  return <FooterContainer>&copy; 2021 MinimalSyntax</FooterContainer>;
};

export default Footer;

const FooterContainer = styled.footer`
  text-align: center;
  margin: 0 10px;
  background-color: #e9e9e9;
  padding: 10px 0 ;
`;
