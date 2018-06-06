import React from 'react';
import { render } from 'react-dom';
import Card from './src/js/card.jsx';

window.ProtoGraph = window.ProtoGraph || {};
window.ProtoGraph.Card = window.ProtoGraph.Card || {};


ProtoGraph.Card.toImageNarrative = function() {
    this.cardType = 'Image';
}

ProtoGraph.Card.toImageNarrative.prototype.init = function(options) {
    this.options = options;
}

ProtoGraph.Card.toImageNarrative.prototype.getData = function(data) {
    return this.containerInstance.exportData();
}

ProtoGraph.Card.toImageNarrative.prototype.renderCol4 = function(data) {
    this.mode = 'col4';
    render( <
        Card dataURL = { this.options.data_url }
        schemaURL = { this.options.schema_url }
        siteConfigURL = { this.options.site_config_url }
        siteConfigs = { this.options.site_configs }
        mode = { this.mode }
        ref = {
            (e) => {
                this.containerInstance = this.containerInstance || e;
            }
        }
        />,
        this.options.selector);
}

ProtoGraph.Card.toImageNarrative.prototype.renderCol2 = function(data) {
    this.mode = 'col2';
    this.render();
}

ProtoGraph.Card.toImageNarrative.prototype.renderCol3 = function(data) {
    this.mode = 'col3';
    this.render();
}

ProtoGraph.Card.toImageNarrative.prototype.renderCol4 = function(data) {
    this.mode = 'col4';
    this.render();
}

ProtoGraph.Card.toImageNarrative.prototype.renderCol7 = function(data) {
    this.mode = 'col7';
    this.render();
}
ProtoGraph.Card.toImageNarrative.prototype.renderCol16 = function(data) {
    this.mode = 'col16';
    this.render();
}
ProtoGraph.Card.toImageNarrative.prototype.render = function(data) {
    render( <
        Card dataURL = { this.options.data_url }
        selector = { this.options.selector }
        siteConfigURL = { this.options.site_config_url }
        siteConfigs = { this.options.site_configs }
        mode = { this.mode }
        ref = {
            (e) => {
                this.containerInstance = this.containerInstance || e;
            }
        }
        />,
        this.options.selector);
}