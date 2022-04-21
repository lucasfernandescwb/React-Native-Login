import styled from "styled-components/native";
import Constants from 'expo-constants';
import { Platform } from 'react-native';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.View`
    width: 100%;
    height: 100%;
    flex: 1;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #191720;
`;
export const Header = styled.View`
    margin-top: ${statusBarHeight + 'px'};
    width: 100%;
`;
export const ButtonView = styled.TouchableOpacity`
    
`;
export const Title = styled.Text`
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #EEEEEE;
`;
export const Subtitle = styled.Text`
    margin-top: 10px;
    font-size: 38px;
    font-weight: 100;
    color: #EEEEEE;
`;
export const Content = styled.View`
    margin-bottom: 20px;
    width: 100%;
    align-items: center;
`;
export const TextButton = styled.Text`
    
`;
export const Text = styled.Text`
    color: #EEEEEE;
`;
export const View = styled.View`
    width: 100%;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: flex-start;
`;
export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 55px;
    align-items: center;
    justify-content: center;
    background-color: #EEEEEE;
    border-radius: 14px;
    margin-top: 20px;
`;