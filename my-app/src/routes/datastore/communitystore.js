import { writable } from 'svelte/store';

// Initialize an empty list of communities
export const communityList = writable([]);

// communitystore.js

// Community data
const communityData = {
  name: '',
  description: '',
  category: '',
  selectedCategory: '',
  email: '',
  number: '',
  youtube: '',
  instagram: '',
  facebook: '',
  twitter: '',
};

// Community permissions
const communityPermissions = {
  postAccess: false,
  editAccess: false,
  deleteAccess: false,
  pollsAccess: false,
  inviteAccess: false,
  chatManagerAccess: false,
  chatMemberAccess: false,
};

// Export objects
export const {
  name,
  description,
  category,
  selectedCategory,
  email,
  number,
  youtube,
  instagram,
  facebook,
  twitter,
} = communityData;

export const {
  postAccess,
  editAccess,
  deleteAccess,
  pollsAccess,
  inviteAccess,
  chatManagerAccess,
  chatMemberAccess,
} = communityPermissions;
