import bcp47 from 'locale2'
export default function getClientBrowserInfo() {
  return {
    isMobile: false,
    language: bcp47
  }
}
