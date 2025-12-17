interface ImportMetaEnv {
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_PUB_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
