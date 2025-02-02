const recognizePrompt = (pillImage: string): string => {
  return `
        You are an AI trained to recognize pills. Given the image of a pill, provide the following details:
        - The color
        -   
        - 
        Here is the image of the pill: ${pillImage}
    `;
};

export default recognizePrompt;
