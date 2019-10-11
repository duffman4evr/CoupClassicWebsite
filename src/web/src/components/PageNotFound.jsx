import React from 'react';
import { Image } from 'semantic-ui-react';
import Azeroth from '../media/map.jpg';

const style = {
  filter: "blur('5px')",
  '-webkit-filter': 'blur(5px)',
  position: 'fixed'
};

const PageNotFound = () => <Image src={Azeroth} fluid centered style={style} />;

export default PageNotFound;
