export const removeWhiteSpace = (text) => {
  return text.replace(/\s/g, "");
};

export const replaceBetween = (origin, startIndex, endIndex, obscure) => {
  const insertion = obscure.repeat(endIndex - startIndex);
  return (
    origin.substring(0, startIndex) + insertion + origin.substring(endIndex)
  );
};
