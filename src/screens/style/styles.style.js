import styled from 'styled-components/native' 
import { ScrollView } from 'react-native';

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