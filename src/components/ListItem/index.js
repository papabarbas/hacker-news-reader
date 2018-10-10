import React from 'react';

import {
  Item,
  Title,
  Host,
  ExternalLink,
  Description,
  CommentLink
} from './styles';

const LINK_REL = 'noopener noreferer nofollow';

const ListItem = () => {
  return (
    <Item>
      <ExternalLink>
        <Title>
          The Developer comunity <Host>(gitconnected.com)</Host>
        </Title>
      </ExternalLink>
      <Description>
        9000 points by{' '}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          Test user
        </CommentLink>
        1 hour ago {' | '}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          42 comments
        </CommentLink>
      </Description>
    </Item>
  );
};

export default ListItem;
