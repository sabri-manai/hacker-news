import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Storycopy } from '../components/Storycopy';
import Filter from "../components/Filter.js";

import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainercopy = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);


  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  const [searching, setSearching] = useState("");
  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Authors</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Storycopy key={storyId} storyId={storyId} 

          />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
