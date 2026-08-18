// src/utils/trackingParams.js

const TRACKING_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'matchtype',
  'adgroupid'
];

const STORAGE_KEY = 'tracking_params';

export function captureTrackingParams() {
  const params = new URLSearchParams(window.location.search);
  const found = {};

  TRACKING_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) {
      found[key] = value;
    }
  });

  // Só sobrescreve o que já está salvo se a URL atual trouxer parâmetros novos.
  // Isso evita perder o dado se o lead navegar para outra página interna
  // antes de preencher o formulário.
  if (Object.keys(found).length > 0) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  }
}

export function getTrackingParams() {
  const stored = sessionStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
}
