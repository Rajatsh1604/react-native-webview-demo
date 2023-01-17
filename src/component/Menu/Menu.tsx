import React from 'react';
import {bool} from 'prop-types';
import {StyledMenu} from './Menu.styled';
const Menu = ({open} : {open: boolean}) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Home</a>
      <a href="/">Product</a>
      <a href="/">Report</a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
