import styled from 'styled-components/native';
import { ScrollView, Image } from 'react-native';

export const Conatainer = styled.View`
  padding: 8px;
  margin-top: 24px;
`;

export const CartText = styled.Text`
  font-size: 16px;
  font-weight: 900;
`;

export const Spacer = styled.View`
  padding: 8px;
`;

export const Scroll = styled(ScrollView)`
  height: 90%;
`;

export const DetailScroll = styled(ScrollView)`
  height: 100%;
`;

export const ArrowHolder = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 32px;
`;
export const StyledImage = styled(Image)`
  width: 100%;
  height: 250px;
  border-radius: 16px;
`;

export const CatHolder = styled.Text`
  color: #002d4b;
  font-size: 18px;
  font-weight: 900;
`;

export const IngredientHolder = styled.View`
  height: 56px;
  width: 100%;
  border-radius: 4px;
  background-color: #e0e0e0;
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

export const Ingredient = styled.Text`
  color: #000;
  font-size: 16px;
  margin-left: 8px;
  font-weight: 900;
`;

export const SpaserHolder = styled.View`
  padding: 6px;
`;

export const DescriptionButton = styled.View`
  padding: 12px;
  height: 54px;
  width: 200px;
  background-color: #333333;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DescriptionButtonHolder = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
