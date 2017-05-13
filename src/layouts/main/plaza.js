import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};

const tilesData = [
    {
        img: img1,
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: img2,
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: img3,
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: img4,
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: img5,
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: img5,
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: img5,
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: img5,
        title: 'Morning',
        author: 'fancycrave1',
    },

];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const OneAskPlaza = () => (
    <GridList style={styles.gridList} cols={2.2}>
        {tilesData.map((tile) => (
            <GridTile
                key={tile.img}
            >
                <img src={tile.img} />
            </GridTile>
        ))}
    </GridList>
);

export default OneAskPlaza;