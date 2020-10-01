import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';

import {Container, ButtonLogout} from './styles';

import {logout} from '../../store/actions/user';

const Profile = () => {
  //const [user, setUser] = useState({});

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <Container>
      <Text>{user.email}</Text>
      <ButtonLogout
        onPress={() => {
          dispatch(logout());
        }}>
        <Text>Sair</Text>
      </ButtonLogout>
    </Container>
  );
};

export default Profile;
