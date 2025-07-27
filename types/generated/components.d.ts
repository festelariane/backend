import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAd extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ads';
  info: {
    description: '';
    displayName: 'Ad';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isActive: Schema.Attribute.Boolean;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksArticleCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_article_cards';
  info: {
    description: '';
    displayName: 'Common Card';
  };
  attributes: {
    description: Schema.Attribute.String;
    descriptionAligment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right', 'justify']
    >;
    headline: Schema.Attribute.String;
    headlineAlignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right', 'justify']
    >;
    iconClassNames: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface BlocksCardWithBackgroundImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_with_background_images';
  info: {
    description: '';
    displayName: 'Card With Background Image';
  };
  attributes: {
    content: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    htmlContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images'>;
    textAlign: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
  };
}

export interface BlocksComments extends Struct.ComponentSchema {
  collectionName: 'components_blocks_comments';
  info: {
    description: '';
    displayName: 'Comments';
  };
  attributes: {
    comments: Schema.Attribute.Component<'common.comment-info', true>;
    headline: Schema.Attribute.String;
  };
}

export interface BlocksCommonCardList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_common_card_lists';
  info: {
    description: '';
    displayName: 'Common Card List';
  };
  attributes: {
    description: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    items: Schema.Attribute.Component<'blocks.article-card', true>;
    itemWrapperClassNames: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'col-lg-4 col-md-6 mb-4'>;
  };
}

export interface BlocksContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_blocks';
  info: {
    displayName: 'Content Block';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface BlocksCtaBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_blocks';
  info: {
    displayName: 'CTA Block';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksEmbedBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_embed_blocks';
  info: {
    displayName: 'Embed Block';
  };
  attributes: {
    caption: Schema.Attribute.String;
    embedCode: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface BlocksFeaturedPosts extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_posts';
  info: {
    displayName: 'Featured Posts';
  };
  attributes: {
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFullImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_full_images';
  info: {
    displayName: 'Full Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface BlocksHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heading_s';
  info: {
    displayName: 'Heading ';
  };
  attributes: {
    heading: Schema.Attribute.String;
    linkId: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    callToAction: Schema.Attribute.Component<'elements.link', false>;
    callToAction2: Schema.Attribute.Component<'elements.link', false>;
    content: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    theme: Schema.Attribute.Enumeration<['turquoise', 'orange']>;
  };
}

export interface BlocksHorizontalAds extends Struct.ComponentSchema {
  collectionName: 'components_blocks_horizontal_ads';
  info: {
    description: '';
    displayName: 'Paragraph With Background Image';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    htmlContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    name: Schema.Attribute.String;
  };
}

export interface BlocksHtmlContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_html_content_blocks';
  info: {
    displayName: 'HtmlContent Block';
  };
  attributes: {
    htmlContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    name: Schema.Attribute.String;
  };
}

export interface BlocksImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_blocks';
  info: {
    displayName: 'Image Block';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    description: '';
    displayName: 'Info Block';
  };
  attributes: {
    callToAction: Schema.Attribute.Component<'elements.link', false>;
    content: Schema.Attribute.Blocks;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    theme: Schema.Attribute.Enumeration<['turquoise', 'orange']>;
  };
}

export interface BlocksMentorRegistrationForm extends Struct.ComponentSchema {
  collectionName: 'components_blocks_mentor_registration_forms';
  info: {
    description: '';
    displayName: 'Mentor Registration Form';
  };
  attributes: {
    content: Schema.Attribute.String;
    descriptionPlaceholder: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    fullNamePlaceholder: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    phonePlaceholder: Schema.Attribute.String;
    submitButtonText: Schema.Attribute.String;
  };
}

export interface BlocksOurServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_services';
  info: {
    description: '';
    displayName: 'Our Services';
  };
  attributes: {
    description: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    services: Schema.Attribute.Component<'blocks.article-card', true>;
  };
}

export interface BlocksParagraphWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraph_with_images';
  info: {
    displayName: 'Paragraph With Image';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images'>;
    imageLandscape: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksPopularDestinations extends Struct.ComponentSchema {
  collectionName: 'components_blocks_popular_destinations';
  info: {
    displayName: 'Popular Destinations';
  };
  attributes: {
    description: Schema.Attribute.String;
    destinations: Schema.Attribute.Component<'blocks.article-card', true>;
    headline: Schema.Attribute.String;
  };
}

export interface BlocksRecentPosts extends Struct.ComponentSchema {
  collectionName: 'components_blocks_recent_posts';
  info: {
    description: '';
    displayName: 'Recent Posts';
    icon: 'monitor';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface BlocksScholarship extends Struct.ComponentSchema {
  collectionName: 'components_blocks_scholarships';
  info: {
    displayName: 'Scholarship';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    headline: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface BlocksSchoolFee extends Struct.ComponentSchema {
  collectionName: 'components_blocks_school_fees';
  info: {
    displayName: 'SchoolFee';
  };
  attributes: {
    excerpt: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSubscribe extends Struct.ComponentSchema {
  collectionName: 'components_blocks_subscribes';
  info: {
    displayName: 'Subscribe';
  };
  attributes: {
    afternoonText: Schema.Attribute.String;
    clearButtonText: Schema.Attribute.String;
    eveningText: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    messageLabel: Schema.Attribute.String;
    morningText: Schema.Attribute.String;
    otherText: Schema.Attribute.String;
    subheadline: Schema.Attribute.String;
    subscribeButtonText: Schema.Attribute.String;
    usernamePlaceholder: Schema.Attribute.String;
    yearPlaceholder: Schema.Attribute.String;
  };
}

export interface CommonArticleExcerpt extends Struct.ComponentSchema {
  collectionName: 'components_common_article_excerpts';
  info: {
    displayName: 'Article Excerpt';
  };
  attributes: {
    excerpt: Schema.Attribute.RichText;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    updatedDate: Schema.Attribute.Date;
  };
}

export interface CommonCommentInfo extends Struct.ComponentSchema {
  collectionName: 'components_common_comment_infos';
  info: {
    displayName: 'Comment Info';
  };
  attributes: {
    comment: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    stars: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    callToAction: Schema.Attribute.Component<'elements.link', false>;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsSeo extends Struct.ComponentSchema {
  collectionName: 'components_elements_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    copy: Schema.Attribute.String;
    navigation: Schema.Attribute.Component<'elements.link', true>;
    policies: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.RichText;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LinkTypesBasicLink extends Struct.ComponentSchema {
  collectionName: 'components_link_types_basic_links';
  info: {
    description: '';
    displayName: 'Basic Link';
  };
  attributes: {
    path: Schema.Attribute.String;
  };
}

export interface LinkTypesCategoryLink extends Struct.ComponentSchema {
  collectionName: 'components_link_types_category_links';
  info: {
    displayName: 'Category Link';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
  };
}

export interface LinkTypesPageLink extends Struct.ComponentSchema {
  collectionName: 'components_link_types_page_links';
  info: {
    description: '';
    displayName: 'Page Link';
  };
  attributes: {
    page: Schema.Attribute.Relation<'oneToOne', 'api::post.post'>;
  };
}

export interface MenuDropdown extends Struct.ComponentSchema {
  collectionName: 'components_menu_dropdowns';
  info: {
    description: '';
    displayName: 'Dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    children: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface MenuMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_items';
  info: {
    displayName: 'MenuItem';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean;
    openInNewTab: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.ad': BlocksAd;
      'blocks.article-card': BlocksArticleCard;
      'blocks.card-with-background-image': BlocksCardWithBackgroundImage;
      'blocks.comments': BlocksComments;
      'blocks.common-card-list': BlocksCommonCardList;
      'blocks.content-block': BlocksContentBlock;
      'blocks.cta-block': BlocksCtaBlock;
      'blocks.embed-block': BlocksEmbedBlock;
      'blocks.featured-posts': BlocksFeaturedPosts;
      'blocks.full-image': BlocksFullImage;
      'blocks.heading': BlocksHeading;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.horizontal-ads': BlocksHorizontalAds;
      'blocks.html-content-block': BlocksHtmlContentBlock;
      'blocks.image-block': BlocksImageBlock;
      'blocks.info-block': BlocksInfoBlock;
      'blocks.mentor-registration-form': BlocksMentorRegistrationForm;
      'blocks.our-services': BlocksOurServices;
      'blocks.paragraph-with-image': BlocksParagraphWithImage;
      'blocks.popular-destinations': BlocksPopularDestinations;
      'blocks.recent-posts': BlocksRecentPosts;
      'blocks.scholarship': BlocksScholarship;
      'blocks.school-fee': BlocksSchoolFee;
      'blocks.subscribe': BlocksSubscribe;
      'common.article-excerpt': CommonArticleExcerpt;
      'common.comment-info': CommonCommentInfo;
      'elements.card': ElementsCard;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.seo': ElementsSeo;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'link-types.basic-link': LinkTypesBasicLink;
      'link-types.category-link': LinkTypesCategoryLink;
      'link-types.page-link': LinkTypesPageLink;
      'menu.dropdown': MenuDropdown;
      'menu.menu-item': MenuMenuItem;
    }
  }
}
