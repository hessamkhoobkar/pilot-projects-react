import { UserList } from "@/types/userinfo";

interface UserViewProps {
  user: UserList;
}

export default function UserView({ user }: UserViewProps) {
  return (
    <div className="bg-white text-slate-900 w-full rounded-2xl p-4">
      <p>
        <span className="text-slate-500 mr-2">User name:</span>
        <span>{user.userName}</span>
      </p>
      <p>
        <span className="text-slate-500 mr-2">Their Age:</span>
        <span>{user.userAge}</span>
      </p>
    </div>
  );
}
