import React from 'react';
import Article from './Article';
import Video from './Video';
import New from './New';
import Popular from './Popular';
import '../index.css'

function List(props) {
    return props.list.map(item => {
        if (item.type === 'video') {
            if (item.views >= 1000) {
                return (
                    <Popular>
                        <Video {...item} />
                    </Popular>
                );
            } else {
                return (
                    <New>
                        <Video {...item} />
                    </New>
                );
            }
        } else if (item.type === 'article') {
            if (item.views >= 1000) {
                return (
                    <Popular>
                        <Article {...item} />
                    </Popular>
                );
            } else {
                return (
                    <New>
                        <Article {...item} />
                    </New>
                );
            }
        }
        return null;
    });
}

export default List;
