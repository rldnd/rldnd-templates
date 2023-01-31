let idCounter = 0;

export const generateID = (prefix = 'blog-id-'): string => {
  // eslint-disable-next-line no-return-assign
  return `${prefix}${(idCounter += 1)}`;
};
