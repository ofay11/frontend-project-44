export default (min = 50, max = 100) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
