import React from 'react';
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {GoCheck} from 'react-icons/go';

export const PricingCard = styled.div`
  background: ${props => props.Background};
  box-shadow: 0 5px 10px rgba(80, 125, 255, 0.1);
  width: 280px;
  margin: 0;
  padding: 0;
  height: 500px;
  text-decoration: none;
  border-radius: 8px;
  transform: ${props => props.Transform};
  transition: all 0.3s ease-out;
  
  &:nth-child(2) {
    margin: 24px;
  }
  
  &:hover {
    transform: scale(1.05);
    color: #1c2237;
  }
  
  @media screen and (max-width: 960px) { 
    &:hover {
    transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
  
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 24px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
  margin-bottom: 0;
  margin-top: 0;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  padding: 0;
  margin-bottom: 0;
  margin-top: 0;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;


const PriceCard = (props) => {
    return (
        <PricingCard Transform={props.Transform} Background={props.Background}>
            <PricingCardInfo>
                <PricingCardIcon>
                    {props.Icon}
                </PricingCardIcon>
                <PricingCardPlan>{props.Header}</PricingCardPlan>
                <PricingCardCost>{props.Price}</PricingCardCost>
                <PricingCardLength>{props.Length}</PricingCardLength>
                <PricingCardFeatures>
                    <PricingCardFeature>{props.FirstFeature} <GoCheck size="20"/></PricingCardFeature>
                    <PricingCardFeature>{props.SecondFeature} <GoCheck size="20"/></PricingCardFeature>
                    <PricingCardFeature>{props.ThirdFeature} <GoCheck size="20"/></PricingCardFeature>
                </PricingCardFeatures>
                <Button variant={props.Variant} color={props.Color}
                        style={{textTransform: "none"}}>{props.ButtonText}</Button>
            </PricingCardInfo>
        </PricingCard>
    );
};

export default PriceCard;
