import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
   return (
      <Container>
         <Category>
            <span>Channels</span>
            <AddCategoryIcon />
         </Category>
         <ChannelButton channelName="general" />
         <ChannelButton channelName="work" />
         <ChannelButton channelName="games" />
      </Container>
   );
};

export default ChannelList;
