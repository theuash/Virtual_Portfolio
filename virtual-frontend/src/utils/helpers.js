/**
 * Get a member's initials from their name.
 */
export const getInitials = (name = '') =>
  name.split(' ').map(w => w[0] || '').join('').toUpperCase().slice(0, 2) || 'V';

/**
 * Format a date string to readable form.
 */
export const formatDate = (str) => {
  if (!str) return '';
  try {
    return new Date(str).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
  } catch {
    return str;
  }
};

/**
 * Clamp a number between min and max.
 */
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

/**
 * Generate a colour from a string (deterministic, pastel-safe hue).
 */
export const stringToColor = (str = '') => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 40%, 55%)`;
};

/**
 * Debounce a function call.
 */
export const debounce = (fn, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Slugify a string for URLs.
 */
export const slugify = (str = '') =>
  str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
