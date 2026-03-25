import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    description: '';
    displayName: 'Contact Info';
    icon: 'phone';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    hotline: Schema.Attribute.String;
  };
}

export interface SharedFooterContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_contents';
  info: {
    description: '';
    displayName: 'Footer Content';
    icon: 'layout';
  };
  attributes: {
    copyrightText: Schema.Attribute.String;
    shortDescription: Schema.Attribute.Text;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'SEO Metadata';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: '';
    displayName: 'Social Link';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    platform: Schema.Attribute.Enumeration<
      ['Facebook', 'Zalo', 'LinkedIn', 'YouTube', 'Instagram', 'Twitter']
    >;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contact-info': SharedContactInfo;
      'shared.footer-content': SharedFooterContent;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
    }
  }
}
