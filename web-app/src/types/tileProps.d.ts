import React from 'react';

export interface TileProps {
  title: string,
  technologies: Array<string>,
  color: string
};

declare const Tile: React.SFC<TileProps>;

export default Tile;