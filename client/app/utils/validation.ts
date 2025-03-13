export const isEmpty = (input: string) => {
  if (input.length <= 0) return true;
};

export const isShort = (input: string) => {
  if (input.length < 8) return true;
};

export const isMatching = (password: string, confirmPassword: string) => {
  if (password === confirmPassword) return true;
};

export const isValidEmail = (input: string) => {
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(input);
};
