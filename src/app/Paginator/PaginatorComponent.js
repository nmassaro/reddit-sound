import React from 'react';
import * as style from './style';

const PaginatorComponent = props => {
    const { nextPage } = props;

    return (
        <style.Paginator>
            <style.Button onClick={() => nextPage()}>Next</style.Button>
        </style.Paginator>
    )
}

export default PaginatorComponent;