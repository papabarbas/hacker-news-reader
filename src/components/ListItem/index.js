import React from 'react';
import Timeago from 'timeago.js';
import getSiteHostname from 'utils/getSiteHostname';
import getArticleLink, { HN_ITEM, HN_USER } from 'utils/getArticleLink';

import {
  Item,
  Title,
  Host,
  ExternalLink,
  Description,
  CommentLink
} from './styles';

const timeago = Timeago();
const LINK_REL = 'noopener noreferer nofollow';

const ListItem = ({ by, kids = [], title, id, url, score, type, time }) => {
  const site = getSiteHostname(url) || 'news.ycombinator.com';
  const link = getArticleLink({ url, id });
  const commentUrl = `${HN_ITEM}${id}`;
  const userUrl = `${HN_USER}${by}`;

  return (
    <Item>
      <ExternalLink href={link} rel={LINK_REL} target="_blank">
        <Title>
          {title} <Host>({site}</Host>
        </Title>
      </ExternalLink>
      <Description>
        {score} points by{' '}
        <CommentLink href={userUrl} rel={LINK_REL} target="_blank">
          {by}
          {' | '}
        </CommentLink>
        {timeago.format(new Date(time * 1000).toISOString())} {' | '}
        <CommentLink href={commentUrl} rel={LINK_REL} target="_blank">
          {kids.length} comments
        </CommentLink>
      </Description>
    </Item>
  );
};

export default ListItem;
