import React, { useRef } from 'react';

import { Input } from '../../components';
import IconBack from '../../images/icon-back.svg';
import IconUser from '../../images/icon-user.svg';
import IconPassword from '../../images/icon-password.svg';

import { Container, Header, ButtonView, Title, Subtitle, Content, TextButton, Text, View, Button } from './styles';

const Home = () => {
    const passwordRef = useRef<any>();

    return (
        <Container>
            <Header>
                <ButtonView>
                    <IconBack width={24} height={24} fill='#EEEEEE' />
                </ButtonView>
                <Title>Entrar em minha conta.</Title>
                <Subtitle>Que bom ter você de volta aqui!</Subtitle>
            </Header>

            <Content>
                <Input 
                    icon={<IconUser width={16} height={16} fill='#616161' />} 
                    placeholder='Email'
                    returnKeyType='next'
                    keyboardType='email-address'
                    onSubmitEditing={() => passwordRef.current.focus()}
                />
                <Input 
                    inputRef={passwordRef}
                    icon={<IconPassword width={16} height={16} fill='#616161' />} 
                    placeholder='Senha'
                    secureTextEntry
                    onSubmitEditing={() => console.log('Chamada da API')}
                />
            </Content>

            <View>
                <Text>Ainda não tem uma conta? Registrar</Text>
                <Button>
                    <TextButton>Entrar</TextButton>
                </Button>
            </View>
        </Container>
    )
}

export default Home;
