import React from 'react';
import { render } from 'react-dom';
import EditCard from './src/js/edit_card.jsx';

ProtoGraph.Card.toImageCard.prototype.getData = function (data) {
  return this.containerInstance.exportData();
}

ProtoGraph.Card.toImageCard.prototype.renderSEO = function (data) {
  this.renderMode = 'SEO';
  return this.containerInstance.renderSEO();
}

ProtoGraph.Card.toImageCard.prototype.renderEdit = function (onPublishCallback) {
  this.onPublishCallback = onPublishCallback;
  render(
    <EditCard
      dataURL={this.options.data_url}
      schemaURL={this.options.schema_url}
      uiSchemaURL={this.options.ui_schema_url}
      onPublishCallback={this.onPublishCallback}
      ref={(e) => {
        this.containerInstance = this.containerInstance || e;
      }}/>,
    this.options.selector);
}
