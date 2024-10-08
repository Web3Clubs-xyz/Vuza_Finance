const config = {
  // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
  // like '/berry-material-react/react/default'
  basename: '/',
  defaultPath: '/dashboard',
  fontFamily: `'Outfit', sans-serif`,
  borderRadius: 12
};
// 
console.log( import.meta.env)

export const HOST_API_KEY = import.meta.env.DEV == true ? 'http://127.0.0.1:8000/api' : import.meta.env.REACT_APP_HOST_API
// export const HOST_API_KEY = import.meta.env.REACT_APP_HOST_API || 'https://api.vuza.finance/api';

export default config;
