import React from 'react';
import * as SC from './styles';
import colors from '../../styles/colors';
import { StatusBar } from 'expo-status-bar';
import bg from '../../../assets/main-bg.png';

const Home: React.FC = () => {
    return (
        <SC.Container>
            <SC.Title>{`NFT Marketplace`}</SC.Title>
            <SC.Image
                source={bg}
            />
            <StatusBar style='light' />
        </SC.Container>
    );
}

export default Home;
