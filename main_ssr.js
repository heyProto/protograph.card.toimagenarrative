import React from 'react'
import { renderToString } from 'react-dom/server'
import Card from './src/js/card.jsx'

global.window = {}
function getInstance(){
    return new ProtoGraph.Card.toCoverImage();
}
function render(initialState) {
    let content = renderToString(
        <Card
            dataJSON={initialState.dataJSON}
            renderingSSR={true}
        />
    );

    return { content, initialState };
}

module.exports = {
    render: render
}