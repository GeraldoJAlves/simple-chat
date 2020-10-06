import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';

import {Container, EmailUser, ButtonLogout} from './styles';

import Avatar from '../../components/Avatar';

import {logoutGoogle} from '../../store/actions/user';

const Profile = () => {
  //const [user, setUser] = useState({});

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  return (
    <Container>
      <Avatar uri={user.photo} size={100} />
      <EmailUser>{user.email}</EmailUser>
      <ButtonLogout
        onPress={() => {
          dispatch(logoutGoogle());
        }}>
        <Text>Sair</Text>
      </ButtonLogout>
    </Container>
  );
};

export default Profile;
