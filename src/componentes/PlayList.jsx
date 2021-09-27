import React from 'react';
import lista from '../data/playlist.js';

export default props=>{
    function getPlaylistItem(){
        return lista.map(item=>{
            return <li key={item.id}>{item.id} - {item.type} - {item.name} - {item.time}</li>
        });
    };
    return(
        <div>
            <ul>
                {getPlaylistItem()}
            </ul>
        </div>
    );
};