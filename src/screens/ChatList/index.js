import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch} from 'react-redux';

import firestore from '@react-native-firebase/firestore';

import Avatar from '../../components/Avatar';

import {
  Container,
  ContainerItem,
  WrapperInfo,
  LastMessage,
  TitleChat,
  TimeText,
} from './styles';

const ChatList = ({navigation}) => {
  const dispatch = useDispatch();

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('rooms')
      .onSnapshot((documentSnapshot) => {
        const docs = documentSnapshot.docs;
        const newData = [];
        console.log(docs[0].data());
        for (let ind in docs) {
          newData.push(docs[ind].data());
        }
        console.log(newData);
        setChats(newData);
        //dispatch(setMessage(message));
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  return (
    <Container>
      <FlatList
        keyExtractor={(item, index) => '' + index}
        data={chats}
        renderItem={({item, index}) => {
          return <ChatItem navigation={navigation} name={item.name} />;
        }}
      />
    </Container>
  );
};

const ChatItem = ({name, navigation}) => {
  return (
    <ContainerItem
      onPress={() => {
        navigation.navigate('ChatRoom');
      }}>
      <Avatar size={50} />
      <WrapperInfo>
        <TitleChat>{name}</TitleChat>
        <LastMessage>ola teste</LastMessage>
      </WrapperInfo>
    </ContainerItem>
  );
};

export default ChatList;
