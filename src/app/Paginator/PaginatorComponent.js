import React from 'react';
import * as style from './style';

const PaginatorComponent = props => {
    const { pageNumber, nextPage, previousPage, before } = props;

    return (
        <style.Paginator>
            { pageNumber > 1 && 
                <style.Button onClick={() => previousPage()}>Previous</style.Button>
            }
            <style.Button onClick={() => nextPage()}>Next</style.Button>
        </style.Paginator>
    )
}

export default PaginatorComponent;