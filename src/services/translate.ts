import i18n from "@src/i18n/";

export const translate = (key: string) => {
  let translation = ''
  try {
    translation = i18n.t(key);
  } catch(e) {
    console.error(e)
  }
  return translation;
}