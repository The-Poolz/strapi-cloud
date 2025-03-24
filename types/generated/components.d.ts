import type { Schema, Struct } from '@strapi/strapi';

export interface HeaderSimpleUrlHeaderSimpleUrl extends Struct.ComponentSchema {
  collectionName: 'components_header_simple_url_header_simple_urls';
  info: {
    description: '';
    displayName: 'Header-Simple-url';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    url: Schema.Attribute.Text;
  };
}

export interface HtmlColorTextHtmlColorText extends Struct.ComponentSchema {
  collectionName: 'components_html_color_text_html_color_texts';
  info: {
    displayName: 'htmlColorText';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface IconTextIconText extends Struct.ComponentSchema {
  collectionName: 'components_icon_text_icon_texts';
  info: {
    description: '';
    displayName: 'iconText';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    smallText: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface MainCtaMainCta extends Struct.ComponentSchema {
  collectionName: 'components_main_cta_main_ctas';
  info: {
    description: '';
    displayName: 'MainCTA';
  };
  attributes: {
    addText: Schema.Attribute.String;
    backColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    ctaText: Schema.Attribute.String;
    flag: Schema.Attribute.String;
    hoverBackColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text: Schema.Attribute.String;
    TextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    url: Schema.Attribute.Text;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    htmlColorText: Schema.Attribute.Component<
      'html-color-text.html-color-text',
      false
    >;
    MainCTA: Schema.Attribute.Component<'main-cta.main-cta', true>;
    smallText: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
    TopBg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    TopBgUrl: Schema.Attribute.Text;
  };
}

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
      'header-simple-url.header-simple-url': HeaderSimpleUrlHeaderSimpleUrl;
      'html-color-text.html-color-text': HtmlColorTextHtmlColorText;
      'icon-text.icon-text': IconTextIconText;
      'main-cta.main-cta': MainCtaMainCta;
      'section.section': SectionSection;
      'simple-url.simple-url': SimpleUrlSimpleUrl;
    }
  }
}
