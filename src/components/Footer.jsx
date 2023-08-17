import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Container= styled.div`
display: flex;
`
const Left= styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center= styled.div`
flex:1;
padding: 20px;
`
const Title= styled.h3`
margin-bottom: 30px;
`

const List= styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem= styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right= styled.div`
flex:1;
padding: 20px;
`

const ContactItem= styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`
const Payment= styled.img`
width: 50%;
`
const Logo= styled.h1`
`
const Desc= styled.p`
margin: 20px 0px;
`
const SocialContainer= styled.div`
display: flex;
`
const SocialIcon= styled.div`
width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Footer = () =>
 {
  return (
    <Container>
      <Left>
        <Logo>M & R</Logo>
        <Desc>
      Step into a world of fandom with our wide range of jerseys, scarves, and accessories from top clubs and national teams. Elevate your match-day experience with high-quality gear that showcases your passion for the beautiful game. 
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
              <FacebookIcon/>
          </SocialIcon>
          <SocialIcon color="E4405F">
              <InstagramIcon/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
              <TwitterIcon/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>
          Contact
        </Title>
        <ContactItem>
          <RoomIcon style={{marginRight:"10px"}}/> Gorakhnath , Gorakhpur 273001
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px"}}/> +1 430143
        </ContactItem>
        <ContactItem>
          <MailIcon style={{marginRight:"10px"}} /> contact@moro.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
