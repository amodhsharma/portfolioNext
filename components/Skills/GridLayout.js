import React from 'react';
import RenderImage from './RenderImage';
import { IMAGE_DATA } from './images';
import styles from './GridLayout.module.css'


const GridLayout = () => {
    return (
        <div>
            {/* outer wrapper ensures the centering of the grid layout 9 it acts as a flex  */}
            <RenderImage images={IMAGE_DATA} />
            {/* files are loaded through images folder in Skills in components */}
        </div>
    );
};

export default GridLayout;