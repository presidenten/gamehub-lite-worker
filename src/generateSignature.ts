import { md5 } from './md5.js'

const GAMEHUB_SECRET_KEY = 'all-egg-shell-y7ZatUDk'

/**
 * Generate signature for GameHub API requests
 * @param params
 */
export function generateSignature(params: Record<string, any>): string {
  const sortedKeys = Object.keys(params)
    .filter((k) => k !== 'sign')
    .sort()
  const paramString = sortedKeys.map((key) => `${key}=${params[key]}`).join('&')
  const signString = `${paramString}&${GAMEHUB_SECRET_KEY}`
  return md5(signString).toLowerCase()
}
