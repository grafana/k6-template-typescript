export const getRandomUsername = () => {
  const timestamp = new Date().getTime();
  return `bert_${timestamp}_${__VU}`;
};
