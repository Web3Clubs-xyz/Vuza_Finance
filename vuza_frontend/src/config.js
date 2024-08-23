const config = {
  // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
  // like '/berry-material-react/react/default'
  basename: '/',
  defaultPath: '/dashboard',
  fontFamily: `'Outfit', sans-serif`,
  borderRadius: 12
};

// export const HOST_API_KEY = import.meta.env.REACT_APP_HOST_API_KEY || 'http://127.0.0.1:8000/api';
export const HOST_API_KEY = import.meta.env.REACT_APP_HOST_API_KEY || 'https://81f3-41-215-97-47.ngrok-free.app/api';

export default config;
