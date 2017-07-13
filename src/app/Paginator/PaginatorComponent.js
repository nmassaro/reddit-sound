import React from 'react';
import * as style from './style';

const PaginatorComponent = props => {
    const { nextPage } = props;

    return (
        <style.Paginator>
            <button onClick={() => nextPage()}>Next</button>
        </style.Paginator>
    )
}

export default PaginatorComponent;