import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "AvantSavant",
  version: packageJson.version,
  copyright: `© ${currentYear}, AvantSavant.`,
  meta: {
    title: "AvantSavant — The New Genius",
    description:
      "AvantSavant is an educational platform dedicated towards ensuring your thinking machine (brain) is well oiled. Purposefully derivative content redistribution, with all sourced content cited and original authors given their due credit.",
  },
};
