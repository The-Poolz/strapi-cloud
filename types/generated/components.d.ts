import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFooterComponent extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_components';
  info: {
    description: '';
    displayName: 'Footer component';
  };
  attributes: {
    footer_content: Schema.Attribute.Component<'footer.footer-content', true>;
    Type: Schema.Attribute.Enumeration<
      ['Social', 'Company', 'Information', 'Help', 'Boost_Social']
    >;
  };
}

export interface FooterFooterContent extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_contents';
  info: {
    description: '';
    displayName: 'Footer Content';
  };
  attributes: {
    NewWindow: Schema.Attribute.Boolean;
    Text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface FooterMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface FooterQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface FooterRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface FooterSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface FooterSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.footer-component': FooterFooterComponent;
      'footer.footer-content': FooterFooterContent;
      'footer.media': FooterMedia;
      'footer.quote': FooterQuote;
      'footer.rich-text': FooterRichText;
      'footer.seo': FooterSeo;
      'footer.slider': FooterSlider;
    }
  }
}
