import { AllFormInterfacesType, FormFields } from '@tribu/forms';
import {
  AdvertisingExposure,
  SocialMediaInteraction,
  SubscriptionStatus,
} from '@tribu/targets';
export const behavioralFormData: AllFormInterfacesType[] = [
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'purchaseHistory',
    icon: 'purchaseHistory',
    label: 'Purchase History',
    placeholder: 'Purchase History',
    value: '',
    type: FormFields.INPUT,
    required: true,
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'pastPurchases',
    placeholder: 'Past Purchases',
    icon: 'Past Purchases',
    label: 'Past Purchases',
    value: '',
    type: FormFields.INPUT,
    required: true,
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'websiteVisits',
    placeholder: 'Website Visits',
    icon: 'Website Visits',
    label: 'Website Visits',
    value: '',
    type: FormFields.INPUT,
    required: true,
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'timeSpentOnWebsite',
    placeholder: 'TimeSpent On Website',
    icon: 'TimeSpent On Website',
    label: 'TimeSpent On Website',
    value: '',
    type: FormFields.INPUT,
    required: true,
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'timeSpentOnWebsite',
    placeholder: 'Ad Clicks',
    icon: 'Ad Clicks',
    label: 'Ad Clicks',
    value: 0,
    type: FormFields.NUMBER_INPUT,
    required: true,
  },
  {
    label: 'Subscription Status',
    placeholder: 'Subscription Status',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'subscriptionStatus',
    icon: 'subscriptionStatus',
    type: FormFields.RADIO,
    elements: Object.values(SubscriptionStatus).map((item) => {
      return {
        value: item,
        label: item,
      };
    }),
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'searchQuery',
    placeholder: 'Search Query',
    icon: 'Search Query',
    label: 'Search Query',
    value: 0,
    type: FormFields.NUMBER_INPUT,
    required: true,
  },
  {
    label: 'Shopping Cart Abandonment',
    placeholder: 'Shopping Cart Abandonment',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'shoppingCartAbandonment',
    icon: 'shoppingCartAbandonment',
    type: FormFields.RADIO,
    elements: ['true', 'false'].map((item) => {
      return {
        value: item,
        label: item,
      };
    }),
  },

  {
    label: 'Repeat Purchases',
    placeholder: 'Repeat Purchases',
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'repeatPurchases',
    icon: 'repeatPurchases',
    value: 0,
    type: FormFields.NUMBER_INPUT,
    required: true,
  },
  {
    label: 'Purchase Frequency',
    placeholder: 'Purchase Frequency',
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'purchaseFrequency',
    icon: 'purchaseFrequency',
    value: 0,
    type: FormFields.NUMBER_INPUT,
    required: true,
  },
  {
    label: 'Product Interaction',
    placeholder: 'Product Interaction',
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'productInteraction',
    icon: 'productInteraction',
    value: 0,
    type: FormFields.INPUT,
    required: true,
  },
  {
    label: 'Engagement Duration',
    placeholder: 'Engagement Duration',
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'engagementDuration',
    icon: 'engagementDuration',
    value: 0,
    type: FormFields.NUMBER_INPUT,
    required: true,
  },

  {
    placeholder: 'Advertising Exposure',
    label: 'Advertising Exposure',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'advertisingExposure',
    icon: 'advertisingExposure',
    type: FormFields.RADIO,
    elements: Object.values(AdvertisingExposure).map((item) => {
      return {
        value: item,
        label: item,
      };
    }),
  },
  {
    label: 'Social Media Interaction',
    placeholder: 'Social Media Interaction',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'socialMediaInteraction',
    icon: 'socialMediaInteraction',
    type: FormFields.RADIO,
    elements: Object.values(SocialMediaInteraction).map((item) => {
      return {
        value: item,
        label: item,
      };
    }),
  },
];
