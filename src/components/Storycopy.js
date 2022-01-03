/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from 'react';
import { getStory } from '../services/hnApi';
import {
  StoryWrapper,
  StoryMeta,
  StoryMetaElement,
} from '../styles/StoryStyles';

export const Storycopy = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">Name:</StoryMetaElement> {story.by}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
});
