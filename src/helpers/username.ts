export const generateUsername = () => {
  const timestamp = new Date().getTime();
  return `bert_${timestamp}_${__VU}`;
};
