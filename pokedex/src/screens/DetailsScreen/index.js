import React from 'react';
import CardDetails from '../../components/CardDetails/index';
import Header from '../../components/Header';
import { Container } from '../DetailsScreen/styles';

const DetailsScreen = () => {
    
    return (
        <>
            <Header detailPage={true}/>

            <Container>
              <CardDetails/> 
            </Container>
        </>
        
    );
};

export default DetailsScreen;
