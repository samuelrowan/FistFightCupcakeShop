import React from 'react';
import PROMPT_DATA from '../../pages/prompts/prompts.data';

const selectPOS = (pos) => {
    
    return (
        PROMPT_DATA[pos][Math.floor(Math.random()*PROMPT_DATA.pos.length)]
    )
}

export default selectPOS