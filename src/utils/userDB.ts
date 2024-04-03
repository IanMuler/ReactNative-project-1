export type User = {
  username: string;
  password: string;
};

export type UserDetails = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
};

export const user: User = {
  username: "test",
  password: "test",
};

export const userDetails: UserDetails = {
  username: "test",
  firstName: "Name",
  lastName: "Lastname",
  email: "test@gmail.com",
};
