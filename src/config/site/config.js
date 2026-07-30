// General configuration for the website

import defaultImage from '../../assets/images/HWIB_Logo.png';
import blog from './blog';

const CONFIG = {
  // The name of the website
  name: 'Houston Women in Bioinformatics',
  // The origin of the website (without trailing slash)
  origin: 'https://houston-wib.org',
  // The base pathname of the website
  basePathname: '/',
  // If the website uses trailing slashes in the URLs
  trailingSlash: false,

  // The website title which is displayed in the browser tab
  title: 'Houston Women in Bioinformatics',

  // Website description
  description: 'The online presence of Houston Women in Bioinformatics.',

  // The website's preview image that is displayed when sharing the website on social media
  defaultImage: defaultImage,
  // The default alt attribute for the preview image
  defaultImageAlt: 'Houston Women in Bioinformatics Logo',
  // The default width and height of the preview image
  defaultImageWidth: 1200,
  defaultImageHeight: 628,

  // Default site theme
  // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
  defaultTheme: 'system',

  // The default language of the website
  language: 'en',
  // The default text direction (ltr is left-to-right, rtl is right-to-left)
  textDirection: 'ltr',

  // Date format (used in blog posts)
  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  // Google Analytics configuration
  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: '',

  // If the RSS feed button should be displayed
  showRssFeed: false,

  // If the theme switcher should be displayed
  showToggleTheme: false,

  // If the header should be stick to the top of the page
  isSticky: true,

  // The position of the header
  // Values: "center" | "right" | "left"
  headerPosition: 'right',

  i18n: {
    language: 'en',
    textDirection: 'ltr',
  },

  // Global metadata config
  metadata: {
    title: {
      default: 'Houston Women in Bioinformatics',
      template: '%s — Houston Women in Bioinformatics',
    },
    description: 'The online presence of Houston Women in Bioinformatics.',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      siteName: 'Houston Women in Bioinformatics',
      images: [
        {
          url: '~/assets/images/HWIB_Logo.png',
          width: 1000,
          height: 1000,
        },
      ],
    },
  },
};

export default CONFIG;
export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
