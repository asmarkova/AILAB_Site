import { useState, useEffect } from 'react';

/**
 * Hook to detect user's country based on IP address
 * Returns country code (e.g., 'UZ', 'RU', 'KZ')
 */
export const useGeoLocation = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we already have cached country
    const cachedCountry = sessionStorage.getItem('userCountry');

    if (cachedCountry) {
      setCountry(cachedCountry);
      setLoading(false);
      return;
    }

    // Detect country using free IP geolocation API
    const detectCountry = async () => {
      try {
        // Using ipapi.co - free, no API key required, 1000 requests/day
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        const countryCode = data.country_code || 'UNKNOWN';

        // Cache in session storage
        sessionStorage.setItem('userCountry', countryCode);
        setCountry(countryCode);
        setLoading(false);
      } catch (error) {
        console.log('Geolocation detection failed, using default');
        // Default to universal version if detection fails
        setCountry('UNKNOWN');
        setLoading(false);
      }
    };

    detectCountry();
  }, []);

  return { country, loading, isUzbekistan: country === 'UZ' };
};
