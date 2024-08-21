import React from "react";
import {
  RepoName,
  RepoDescription,
  RepoLicense,
  RepoForkNumber,
  RepoStargazers,
  RepoUpdateStatus,
} from "./RepoElements";

const RepoCard = ({ top, middle, bottom }) => {
  return (
    <li className="flex flex-col justify-evenly p-4 w-full gap-3 rounded-lg self-start bg-[#1D1B48]">
      {top && top}
      {middle && middle}
      {bottom && bottom}
    </li>
  );
};

export default RepoCard;

RepoCard.Name = RepoName;
RepoCard.Description = RepoDescription;
RepoCard.ForkNumber = RepoForkNumber;
RepoCard.Stargazers = RepoStargazers;
RepoCard.UpdateStatus = RepoUpdateStatus;
RepoCard.License = RepoLicense;
