export interface UserList {
  userName: string;
  userAge: string;
}

export type NewUserFormProps = {
  onSubmit: (user: UserList) => void;
};
