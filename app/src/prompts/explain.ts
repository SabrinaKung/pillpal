const explainPrompt = (pillDesc: string): string => {
  return `
          Here is the description of the pill: ${pillDesc}
      `;
};

export default explainPrompt;
