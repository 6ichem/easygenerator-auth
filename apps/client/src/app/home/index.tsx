import { FetchUser } from "@/core/http";
import { useEffect, useState } from "react";
import { Button } from "@/components/custom/button";
import { User } from "./types";
import { logOut } from "@/core/utils";

export default function Home() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);

    try {
      const data = await FetchUser();
      setUser(data);
      setLoading(false);
    } catch (e: any) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const Content = () =>
    loading ? (
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Loading...
        </h1>
      </div>
    ) : (
      <div className="flex flex-col gap-5 text-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Welcome, {user?.name}! 🎉
          </h1>
          <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {user?.email}
          </span>
        </div>
        <Button variant="destructive" className="w-full" onClick={logOut}>
          Log Out
        </Button>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Content />
      </div>
    </div>
  );
}
