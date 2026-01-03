'use client';

const KEY = 'portfolio_admin_overrides_v1';
const AUTH_KEY = 'portfolio_admin_authed_v1';

export function getOverrides() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function setOverrides(next) {
  localStorage.setItem(KEY, JSON.stringify(next));
}

export function getOverride(path, fallback) {
  const data = getOverrides();
  return path.split('.').reduce((acc, k) => (acc && k in acc ? acc[k] : undefined), data) ?? fallback;
}

export function setOverride(path, value) {
  const data = getOverrides();
  const keys = path.split('.');
  let cur = data;

  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    if (!cur[k] || typeof cur[k] !== 'object') cur[k] = {};
    cur = cur[k];
  }

  cur[keys[keys.length - 1]] = value;
  setOverrides(data);
}

export function isAuthed() {
  return localStorage.getItem(AUTH_KEY) === '1';
}

export function setAuthed(value) {
  localStorage.setItem(AUTH_KEY, value ? '1' : '0');
}

export function clearAuth() {
  localStorage.removeItem(AUTH_KEY);
}