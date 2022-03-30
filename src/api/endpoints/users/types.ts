export type TUserData = {
   email: string;
   password: string;
};
export type TCreateUserRes = TUserData & {
   id: string;
   createdAt: string;
};
