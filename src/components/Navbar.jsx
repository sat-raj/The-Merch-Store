import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Input= styled.input`
border: none;
`
const Logo= styled.h1`
font-weight: bold;
`
const Navbar = () => {
  return (
    <div>
    <Container>
    <Wrapper>
    <Left>
        <Language>
            EN
        </Language>
        <SearchContainer>
            <Input/>
            <SearchIcon style={{color: "gray", fontSize: 16}} />
             
        </SearchContainer>
        
    </Left>
    <Center>
        <Logo>
            M & R
        </Logo>
    </Center>
    <Right>
        <MenuItem>
            Register
        </MenuItem>
        <MenuItem>
            Sign In
        </MenuItem>
        <MenuItem>
        <Badge badgeContent={6} color="primary">
                <ShoppingCartOutlinedIcon/>
            </Badge>
        </MenuItem>
    </Right>
    </Wrapper>
    </Container>
    </div>
  )
}

export default Navbar