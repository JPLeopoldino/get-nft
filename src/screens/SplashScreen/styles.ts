import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';

export const Container = styled.View`
    position: relative;
    flex: 1;
    padding: 80px 0;
    background-color: #000;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Image = styled.Image`
    position: absolute;
    top: 0;
    right: -75%;
    z-index: -1;
`;

export const Title = styled.Text`
    font-family: SFProDisplay-Black;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;
    /* letter-spacing: 0em; */
    text-align: left;
    color: #FFF;
`;

export const CardContainer = styled(BlurView)`
    min-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px;
    padding: 30px;
    border: 1px solid #FFFFFF4D;
    /* background: #00000088; */
    background: #FFFFFF03;
    /* backdrop-filter: blur(30px); */
`;

export const CardHeaderContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    /* position: static;
    width: 280px;
    height: 70px;
    left: 30px;
    top: 30px; */


    /* Inside auto layout */

    /* flex: none;
    order: 0;
    flex-grow: 0;
    margin: 30px 0px; */
`;

export const CardTitle = styled.Text`
    font-family: SFProDisplay-Bold;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    color: #FFF;
`;

export const CardSubTitle = styled.Text`
    font-family: SFProDisplay-Regular;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    color: #EBEBF599;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 30px;
    background: #97A9F680;
    /* background-blend-mode: overlay; */
    border: 1.24px solid #FFFFFF80;
    height: 50.54216766357422px;
    width: 220px;
    border-radius: 37.22891616821289px;
    padding: 15px 21px 14px 20px;
`;

export const ButtonLabel = styled.Text`
    font-family: SFProDisplay-Semibold;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    /* letter-spacing: -0.40799999237060547px; */
    text-align: center;
    color: #FFF;
`;
