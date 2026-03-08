import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Avantesavante",
  version: packageJson.version,
  copyright: `© ${currentYear}, Avantesavante.`,
  meta: {
    title: "Avantesavante — The New Genius",
    description:
      "Avantesavante is an educational platform dedicated towards ensuring your thinking machine (brain) is well oiled. Purposefully derivative content redistribution, with all sourced content cited and original authors given their due credit.",
  },
};
