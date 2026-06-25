import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userProfileImage from "../../assets/generated/user-profile.png";

function User() {
  const { userid = "Sneha1166" } = useParams();
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");

    fetch(`https://api.github.com/users/${userid}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        setProfile(data);
      })
      .catch(() => {
        setProfile(null);
        setError("Could not load this Github user.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userid]);

  return (
    <div className="bg-white py-16">
      <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
            User Profile
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            User: <span className="text-orange-700">{userid}</span>
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            This profile is loaded from the Github username in the URL. Try
            changing the route to{" "}
            <span className="font-semibold">/user/octocat</span>.
          </p>

          <div className="mt-8 max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/70">
            {isLoading ? (
              <p className="text-lg font-semibold text-gray-700">
                Loading user info...
              </p>
            ) : error ? (
              <p className="text-lg font-semibold text-red-600">{error}</p>
            ) : (
              <>
                <div className="flex items-center gap-4">
                  <img
                    className="h-20 w-20 rounded-full border-4 border-orange-100 object-cover"
                    src={profile.avatar_url}
                    alt={`${profile.login} avatar`}
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {profile.name || profile.login}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                      @{profile.login}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <p className="text-2xl font-bold text-gray-900">
                      {profile.followers}
                    </p>
                    <p className="text-xs font-medium text-gray-500">
                      Followers
                    </p>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4 text-center">
                    <p className="text-2xl font-bold text-orange-800">
                      {profile.following}
                    </p>
                    <p className="text-xs font-medium text-orange-700">
                      Following
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-900 p-4 text-center">
                    <p className="text-2xl font-bold text-white">
                      {profile.public_repos}
                    </p>
                    <p className="text-xs font-medium text-gray-300">Repos</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <img
          className="mx-auto w-full max-w-lg"
          src={userProfileImage}
          alt="User profile illustration"
        />
      </div>
    </div>
  );
}

export default User;
