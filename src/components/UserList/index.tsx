import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
   nickname: string;
   isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
   return (
      <User>
         <Avatar className={isBot ? 'bot' : ''} />
         <strong> {nickname} </strong>
         {isBot && <span>Bot</span>}
      </User>
   );
};

const UserList: React.FC = () => {
   return (
      <Container>
         <Role>Online - 1</Role>
         <UserRow nickname="Nick" />

         <Role>Offline - 5</Role>
         <UserRow nickname="Nick2" isBot />
      </Container>
   );
};

export default UserList;
