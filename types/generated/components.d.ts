import type { Schema, Struct } from '@strapi/strapi';

export interface SimpleUrlSimpleUrl extends Struct.ComponentSchema {
  collectionName: 'components_simple_url_simple_urls';
  info: {
    displayName: 'simpleUrl';
    icon: 'cursor';
  };
  attributes: {
    name: Schema.Attribute.String;
    newWindow: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'simple-url.simple-url': SimpleUrlSimpleUrl;
    }
  }
}
