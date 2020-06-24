import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
   const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

   useEffect(() => {
      const div = messagesRef.current;
      if (div) {
         div.scrollTop = div.scrollHeight;
      }
   }, [messagesRef]);

   return (
      <Container>
         <Messages ref={messagesRef}>
            <ChannelMessage author="Nick" date="24/06/2020" content="Hello World" />
            <ChannelMessage
               author="Nick2"
               date="24/06/2020"
               hasMention
               isBot
               content={
                  <>
                     <Mention>@Nick</Mention>, Hello
                  </>
               }
            />
         </Messages>
         <InputWrapper>
            <Input type="text" placeholder="Message #general" />
            <InputIcon />
         </InputWrapper>
      </Container>
   );
};

export default ChannelData;
