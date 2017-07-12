import React from 'react';
import * as style from './style';

const PaginatorComponent = props => {
    const { page, posts, updatePage } = props;
    const pages = Array(posts.count).map(p => p+1);

    return (
        <style.Paginator>
            {
                pages.map(page =>
                <button onClick={() => updatePage(page)}>
                    { page }
                </button>
                )
            }
        </style.Paginator>
    )
;}

export default PaginatorComponent;