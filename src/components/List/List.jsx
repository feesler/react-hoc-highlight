import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Article/Article.jsx';
import Video from '../Video/Video.jsx';
import withHighlight from '../withHighlight/withHighlight.jsx';

const getItemComponent = (item) => {
  const itemComponentMap = {
    article: Article,
    video: Video,
  };

  if (!(item.type in itemComponentMap)) {
    return null;
  }

  return itemComponentMap[item.type];
};

function List(props) {
  const { list } = props;

  return list.map(item => {
    const ItemComponent = getItemComponent(item);
    const Highlighted = withHighlight(ItemComponent);

    return (
      <Highlighted {...item} />
    );
  });
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
  })).isRequired,
};

export default List;
