import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderPrint = styled.h1`
    border-bottom: 1px solid black;
`;

export default class Header extends Component {

  render(){
    return (
        <HeaderPrint>{this.props.title}</HeaderPrint>
        )
    }
}
