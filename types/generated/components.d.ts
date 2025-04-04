import type { Schema, Struct } from '@strapi/strapi';

export interface ChainAddressesChainAddresses extends Struct.ComponentSchema {
  collectionName: 'components_chain_addresses_chain_addresses';
  info: {
    description: '';
    displayName: 'address on chain';
    icon: 'address-card';
    name: 'ChainAddresses';
  };
  attributes: {
    Address: Schema.Attribute.String & Schema.Attribute.Required;
    chain_setting: Schema.Attribute.Relation<
      'oneToOne',
      'api::chain-setting.chain-setting'
    >;
  };
}

export interface ColorIconColorIcon extends Struct.ComponentSchema {
  collectionName: 'components_color_icon_color_icons';
  info: {
    description: '';
    displayName: 'colorIcon';
  };
  attributes: {
    Color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    icon: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface ContractOnChainContractOnChain extends Struct.ComponentSchema {
  collectionName: 'components_contract_on_chain_contract_on_chains';
  info: {
    description: '';
    displayName: 'Contract on Chain';
    icon: 'alien';
  };
  attributes: {
    Address: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    ContractType: Schema.Attribute.Relation<
      'oneToOne',
      'api::contract-type.contract-type'
    > &
      Schema.Attribute.Required;
    ContractVersion: Schema.Attribute.Relation<
      'oneToOne',
      'api::contract.contract'
    > &
      Schema.Attribute.Required;
  };
}

export interface DictionaryLinks extends Struct.ComponentSchema {
  collectionName: 'components_dictionary_links';
  info: {
    description: '';
    displayName: 'Dictionary-Links';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FullTokenDistributionFullTokenDistribution
  extends Struct.ComponentSchema {
  collectionName: 'components_full_token_distribution_full_token_distributions';
  info: {
    displayName: 'FullTokenDistribution';
  };
  attributes: {
    DistributionType: Schema.Attribute.String;
    Monthly: Schema.Attribute.Component<
      'token-distribution.token-distribution',
      true
    >;
    non_evm_chain: Schema.Attribute.Relation<
      'oneToOne',
      'api::non-evm-chain.non-evm-chain'
    >;
    Text: Schema.Attribute.Text;
    TGE: Schema.Attribute.Component<
      'token-distribution.token-distribution',
      false
    >;
  };
}

export interface HeaderSimpleUrlHeaderSimpleUrl extends Struct.ComponentSchema {
  collectionName: 'components_header_simple_url_header_simple_urls';
  info: {
    description: '';
    displayName: 'Header-Simple-url';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HighlightsHighlights extends Struct.ComponentSchema {
  collectionName: 'components_highlights_highlights';
  info: {
    displayName: 'Highlights';
  };
  attributes: {
    Value: Schema.Attribute.Text;
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

export interface InvestorsInvestors extends Struct.ComponentSchema {
  collectionName: 'components_investors_investors';
  info: {
    displayName: 'Investors';
  };
  attributes: {
    Category: Schema.Attribute.String;
    investor: Schema.Attribute.Relation<'manyToMany', 'api::investor.investor'>;
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
    flag: Schema.Attribute.Boolean & Schema.Attribute.Required;
    hoverBackColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    TextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface OverviewOverview extends Struct.ComponentSchema {
  collectionName: 'components_overview_overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    BoldText: Schema.Attribute.Text;
    Name: Schema.Attribute.String;
    Text: Schema.Attribute.Text;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    description: '';
    displayName: 'Section';
  };
  attributes: {
    htmlColorText: Schema.Attribute.Component<
      'html-color-text.html-color-text',
      false
    >;
    MainCTA: Schema.Attribute.Component<'main-cta.main-cta', true>;
    secondCta: Schema.Attribute.Component<'main-cta.main-cta', true>;
    SecondSmallText: Schema.Attribute.String;
    secondTitle: Schema.Attribute.String;
    smallText: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
    TopBg: Schema.Attribute.Media<'images' | 'files'>;
    TopBgUrl: Schema.Attribute.Text;
  };
}

export interface SimpleUrlSimpleUrl extends Struct.ComponentSchema {
  collectionName: 'components_simple_url_simple_urls';
  info: {
    description: '';
    displayName: 'simpleUrl';
    icon: 'cursor';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    newWindow: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SmartLinksSmartLinks extends Struct.ComponentSchema {
  collectionName: 'components_smart_links_smart_links';
  info: {
    displayName: 'SmartLinks';
  };
  attributes: {
    link_type: Schema.Attribute.Relation<
      'oneToOne',
      'api::link-type.link-type'
    >;
    URL: Schema.Attribute.String;
  };
}

export interface SyntheticZoneSyntetic extends Struct.ComponentSchema {
  collectionName: 'components_synthetic_zone_syntetics';
  info: {
    displayName: 'Syntetic';
  };
  attributes: {
    chain_setting: Schema.Attribute.Relation<
      'oneToOne',
      'api::chain-setting.chain-setting'
    >;
    TokenAddress: Schema.Attribute.String;
  };
}

export interface TokenDistributionTokenDistribution
  extends Struct.ComponentSchema {
  collectionName: 'components_token_distribution_token_distributions';
  info: {
    displayName: 'TokenDistribution';
  };
  attributes: {
    IsTimeTBA: Schema.Attribute.Boolean;
    Ratio: Schema.Attribute.Decimal;
    StartTime: Schema.Attribute.DateTime;
    Unlock: Schema.Attribute.DateTime;
  };
}

export interface TokenomicsTokenomics extends Struct.ComponentSchema {
  collectionName: 'components_tokenomics_tokenomics';
  info: {
    displayName: 'Tokenomics';
  };
  attributes: {
    CirculationSupply: Schema.Attribute.String;
    MarketCap: Schema.Attribute.String;
    Symbol: Schema.Attribute.String;
    TGEMarketCap: Schema.Attribute.String;
    TotalRaise: Schema.Attribute.String;
    TotalSupply: Schema.Attribute.String;
    USDPrice: Schema.Attribute.Decimal;
    VisualInfo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface UploadPoolUploadPool extends Struct.ComponentSchema {
  collectionName: 'components_upload_pool_upload_pools';
  info: {
    displayName: 'Upload pool';
  };
  attributes: {
    buy_with: Schema.Attribute.Relation<'oneToOne', 'api::buy-with.buy-with'>;
    Participants: Schema.Attribute.Integer;
    PublicRate: Schema.Attribute.Decimal;
    TotalTokens: Schema.Attribute.Decimal;
    WhitelistRate: Schema.Attribute.Decimal;
  };
}

export interface VersionVersion extends Struct.ComponentSchema {
  collectionName: 'components_version_versions';
  info: {
    displayName: 'Version';
    icon: 'alien';
  };
  attributes: {
    ContractType: Schema.Attribute.Relation<
      'oneToOne',
      'api::contract-type.contract-type'
    > &
      Schema.Attribute.Required;
    ContractVersion: Schema.Attribute.Relation<
      'oneToOne',
      'api::contract.contract'
    > &
      Schema.Attribute.Required;
  };
}

export interface VisualTextVisualText extends Struct.ComponentSchema {
  collectionName: 'components_visual_text_visual_texts';
  info: {
    displayName: 'VisualText';
  };
  attributes: {
    Highlights: Schema.Attribute.Component<'highlights.highlights', true>;
    Overview: Schema.Attribute.Component<'overview.overview', true>;
    SmartLinks: Schema.Attribute.Component<'smart-links.smart-links', true>;
    Tokenomics: Schema.Attribute.Component<'tokenomics.tokenomics', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'chain-addresses.chain-addresses': ChainAddressesChainAddresses;
      'color-icon.color-icon': ColorIconColorIcon;
      'contract-on-chain.contract-on-chain': ContractOnChainContractOnChain;
      'dictionary.links': DictionaryLinks;
      'full-token-distribution.full-token-distribution': FullTokenDistributionFullTokenDistribution;
      'header-simple-url.header-simple-url': HeaderSimpleUrlHeaderSimpleUrl;
      'highlights.highlights': HighlightsHighlights;
      'html-color-text.html-color-text': HtmlColorTextHtmlColorText;
      'icon-text.icon-text': IconTextIconText;
      'investors.investors': InvestorsInvestors;
      'main-cta.main-cta': MainCtaMainCta;
      'overview.overview': OverviewOverview;
      'section.section': SectionSection;
      'simple-url.simple-url': SimpleUrlSimpleUrl;
      'smart-links.smart-links': SmartLinksSmartLinks;
      'synthetic-zone.syntetic': SyntheticZoneSyntetic;
      'token-distribution.token-distribution': TokenDistributionTokenDistribution;
      'tokenomics.tokenomics': TokenomicsTokenomics;
      'upload-pool.upload-pool': UploadPoolUploadPool;
      'version.version': VersionVersion;
      'visual-text.visual-text': VisualTextVisualText;
    }
  }
}
