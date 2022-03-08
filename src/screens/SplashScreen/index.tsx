import React from 'react';
import * as SC from './styles';
import bg from '../../assets/splash-bg.png';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = () => {
    const navigation = useNavigation();

    return (
        <SC.Container>
            <SC.Title>{`Welcome to\n NFT Marketplace`}</SC.Title>
            <SC.CardContainer
                intensity={90}
                tint="dark"
            >
                <SC.CardHeaderContainer>
                    <SC.CardTitle>Explore and Mint NFTs</SC.CardTitle>
                    <SC.CardSubTitle>{`You can buy and sell the NFTs of the best\n artists in the world.`}</SC.CardSubTitle>
                </SC.CardHeaderContainer>
                <SC.Button
                    onPress={() => navigation.replace('Main')}
                    activeOpacity={0.8}
                    // underlayColor={colors.button}
                >
                    <SC.ButtonLabel>Get started now</SC.ButtonLabel>
                </SC.Button>
            </SC.CardContainer>
            <SC.Image source={bg}/>
            <StatusBar style='light' hidden />
        </SC.Container>
    );
}

export default SplashScreen;
