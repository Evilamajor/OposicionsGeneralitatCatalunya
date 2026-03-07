// Shared environment flags for UI/runtime gates.
// Editing features must remain development-only so the public site stays read-only.
export const isDev = import.meta.env.DEV;
export const isProd = import.meta.env.PROD;