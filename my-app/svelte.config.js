import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
  },
  paths: {
    '/signup-data': (request) => {
      return { 
        data: {
          title: 'Sign-up Data',
        },
      };
    },
  },
};
