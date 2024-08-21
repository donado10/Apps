import { useEffect, useState } from "react";
import { daysPassedFromNow } from "../utils/functions";

export const useFetchData = (username) => {
  const [data, setData] = useState({});

  let profileData = {};
  let RepoData = {};

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((res) =>
        res.json()
      ),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then(
        (res) => res.json()
      ),
    ]).then(([dataProfile, dataRepos]) => {
      profileData = {
        image: dataProfile.avatar_url,
        name: dataProfile.login,
        bio: dataProfile.bio,
        followers: dataProfile.followers,
        following: dataProfile.following,
        location: dataProfile.location,
      };

      const dataRepos_slice = dataRepos.slice(0, 4);
      const dataRepos_remains = dataRepos.slice(4, -1);

      RepoData = {
        repositories: {
          slice: dataRepos_slice.map((repo) => {
            return {
              name: repo.name,
              description: repo.description,
              forks: repo.forks_count,
              stars: repo.stargazers_count,
              updated: daysPassedFromNow(repo.updated_at),
              license: repo.license,
            };
          }),
          remains: dataRepos_remains.map((repo) => {
            return {
              name: repo.name,
              description: repo.description,
              forks: repo.forks_count,
              stars: repo.stargazers_count,
              updated: daysPassedFromNow(repo.updated_at),
              license: repo.license,
            };
          }),
        },
      };

      setData({ ...profileData, ...RepoData });
    });
  }, [username]);

  return { ...data };
};
