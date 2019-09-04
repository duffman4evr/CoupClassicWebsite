import React, { Component } from 'react';
import styled from "styled-components";
import values from "../media/item_values.jpg"


const ItemValuesContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 5rem;
`

class ItemValues extends Component {
    render() {
        return (
            <ItemValuesContainer>
            <div>
                <img src={values} alt="value spreadsheet"/>
            </div>
            </ItemValuesContainer>
        );
    }
}

export default ItemValues;