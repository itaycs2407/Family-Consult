export const useIsMobile = () => {
  return /Android|iPhone/i.test(navigator.userAgent);
};
