import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
   channelName: string;
   selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ selected, channelName }) => {
   return (
      <Container className={selected ? 'active' : ''}>
         <div>
            <HashtagIcon />
            <span>{channelName}</span>
         </div>
         <div className="channel-button-icons">
            <InviteIcon />
            <SettingsIcon />
         </div>
      </Container>
   );
};

export default ChannelButton;
