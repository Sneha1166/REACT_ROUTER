import React from "react";
import githubDashboardImage from "../../assets/generated/github-dashboard.png";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Sneha1166")
  //     .then((response) => response.json())
  //     .then((profile) => {
  //       setData(profile);
  //     })
  //     .catch(() => {
  //       setData(null);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  const avatarUrl = data?.avatar_url;
  const username = data?.login || "Sneha1166";
  const followers = data?.followers ?? 0;
  const publicRepos = data?.public_repos ?? 0;

  return (
    <div className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
            Github Profile
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Developer dashboard
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
            A clean profile view with live Github stats and a polished visual
            frame.
          </p>

          <div className="mt-8 max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/70">
            <div className="flex items-center gap-4">
              {avatarUrl ? (
                <img
                  className="h-20 w-20 rounded-full border-4 border-orange-100 object-cover"
                  src={avatarUrl}
                  alt={`${username} Github avatar`}
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-2xl font-bold text-white">
                  {username.charAt(0).toUpperCase()}
                </div>
              )}

              <div>
                <h2 className="text-2xl font-bold text-gray-900">{username}</h2>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  Github account
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm font-medium text-gray-500">Followers</p>
                <p className="mt-1 text-3xl font-bold text-gray-900">
                  {followers}
                </p>
              </div>
              <div className="rounded-lg bg-orange-50 p-4">
                <p className="text-sm font-medium text-orange-700">Repos</p>
                <p className="mt-1 text-3xl font-bold text-orange-800">
                  {publicRepos}
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          className="mx-auto w-full max-w-xl"
          src={githubDashboardImage}
          alt="Github dashboard illustration"
        />
      </div>
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Sneha1166");
  return response.json();
};
