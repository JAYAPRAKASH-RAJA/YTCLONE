// src/pages/Callback.tsx
import { FunctionalComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import axios from 'axios';

const Callback: FunctionalComponent = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      fetchTokens(code);
    }
  }, []);

  const fetchTokens = async (code: string) => {
    try {
      const response = await axios.get(`http://localhost:8010/api/videos/oauth2callback?code=${code}`);
      console.log('Tokens:', response.data);
    } catch (error) {
      console.error('Error fetching tokens:', error);
    }
  };

  return <div>Callback Page</div>;
};

export default Callback;
