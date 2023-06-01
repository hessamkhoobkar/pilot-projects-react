"use client";

import { useEffect, useState } from "react";

import NewUserForm from "@/components/userinfo/NewUserForm";
import { UserList } from "@/types/userinfo";
import UserView from "@/components/userinfo/UsersView";

export default function Page() {
  const [userList, setUserList] = useState<UserList[]>([]);

  useEffect(() => {
    const storedUserList = localStorage.getItem("userlist");
    if (storedUserList !== null) {
      setUserList(JSON.parse(storedUserList));
    }
  }, []);

  function handleFormSubmit(user: UserList) {
    setUserList((prevUserList) => {
      const updatedUserList = [...prevUserList, user];
      localStorage.setItem("userlist", JSON.stringify(updatedUserList));
      return updatedUserList;
    });
  }

  const listView = userList.map((user) => {
    return <UserView key={user.userName} user={user} />;
  });

  return (
    <div className="w-screen min-h-screen bg-slate-200 text-slate-900 pb-8">
      <div className="w-full max-w-5xl mx-auto pt-8">
        <NewUserForm onSubmit={handleFormSubmit} />
      </div>
      <div className="w-full max-w-5xl mx-auto pt-8">
        {listView.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">{listView}</div>
        ) : (
          <div className="flex flex-col justify-center items-center text-slate-500">
            <h3 className="text-2xl font-medium">There are no users here</h3>
            <p>Please add some users</p>
          </div>
        )}
      </div>
    </div>
  );
}

// set and get to local storage
