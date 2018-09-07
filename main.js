import React from 'react';
import { render, hydrate } from 'react-dom';
import Card from './src/js/card.jsx';

window.ProtoGraph = window.ProtoGraph || {};
window.ProtoGraph.Card = window.ProtoGraph.Card || {};

ProtoGraph.Card.toImageNarrative = function () {
  this.cardType = 'Card';
}

ProtoGraph.Card.toImageNarrative.prototype.init = function (options) {
  this.options = options;
}

ProtoGraph.Card.toImageNarrative.prototype.getData = function (data) {
  return this.containerInstance.exportData();
}
ProtoGraph.Card.toImageNarrative.prototype.renderSixteenCol= function (data) {
  this.mode = 'col16';
  this.render();
}

ProtoGraph.Card.toImageNarrative.prototype.renderNineCol = function (data) {
  this.mode = 'col9';
  this.render();
}

ProtoGraph.Card.toImageNarrative.prototype.renderSevenCol= function (data) {
  this.mode = 'col7';
  this.render();
}

ProtoGraph.Card.toImageNarrative.prototype.renderFourCol= function (data) {
  this.mode = 'col4';
  this.render();
}

ProtoGraph.Card.toImageNarrative.prototype.renderThreeCol= function (data) {
  this.mode = 'col3';
  this.render();
}

ProtoGraph.Card.toImageNarrative.prototype.renderTwoCol= function (data) {
  this.mode = 'col2';
  this.render();
}
ProtoGraph.Card.toImageNarrative.prototype.render = function () {
  if (this.options.isFromSSR) {
    hydrate(
      <Card
        selector={this.options.selector}
        dataURL={this.options.data_url}
        siteConfigs={this.options.site_configs}
        renderingSSR={true}
      />,
      this.options.selector);
  } else {
    render(
      <Card
        selector={this.options.selector}
        dataURL={this.options.data_url}
        schemaURL={this.options.schema_url}
        siteConfigs={this.options.site_configs}
        siteConfigURL={this.options.site_config_url}
        mode={this.mode}

        ref={(e) => {
          this.containerInstance = this.containerInstance || e;
        }}
      />,
      this.options.selector);
  }
}

