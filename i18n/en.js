import get from 'lodash/get';
import translations from './en/index';

window.TRANSLATIONS = function(key) {
  // return key name if translation not found
  return get(translations, key, key);
};