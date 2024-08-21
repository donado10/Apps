import React, { useEffect } from "react";
import { useState } from "react";
import {
  ProfileBio,
  ProfileImage,
  ProfileMetadata,
  ProfileName,
} from "../Components/Profile/ProfileElements";

import RepoCard from "../Components/Repository/RepoCard";

import { Appcontext } from "./AppContext";
import { useFetchData } from "../Hooks/use-fetch-data";
import { useLocation } from "react-router-dom";

const ContainerContent = ({ children }) => {
  return (
    <div className="container_content relative w-4/5 h-full  flex items-center flex-col ">
      {children}
    </div>
  );
};

const ContainerBackground = ({ children }) => {
  return (
    <div className="absolute inset-0 laptop:top-[-4rem] w-32 aspect-[1/1]  bg-[#20293A] rounded-lg flex items-center justify-center tab tablet:top-[-2rem]">
      {children}
    </div>
  );
};

const ContainerHeader = ({ children }) => {
  return (
    <div className="container__header w-full flex items-center justify-center laptop:flex-row laptop:gap-10 p-2 tablet:flex-col tablet:gap-5">
      {children}
    </div>
  );
};

const ContainerSubHeader = ({ children }) => {
  return (
    <div className="container__sub_header w-full flex  gap-3 flex-col pt-3 pb-3">
      {children}
    </div>
  );
};

const ContainerBody = ({ children }) => {
  return (
    <div className="container__body w-full h-full mt-4 mb-32">
      <ul className="repositories grid laptop:grid-cols-2 w-full h-full  gap-20 tablet:grid-cols-1">
        {React.Children.map(children, (child) => {
          return <>{child}</>;
        })}
      </ul>
    </div>
  );
};

const Container = () => {
  const location = useLocation();
  const username = location.search.split("=")[1];
  const data = useFetchData(username);
  const [toggleAllRepos, setToggleAllRepos] = useState(false);
  const [showAllRepos, setShowAllRepos] = useState(false);

  useEffect(() => {
    setToggleAllRepos(false);
    setShowAllRepos(false);
  }, [username]);

  return (
    <>
      {data && (
        <main className=" bg-[#20293A] w-screen flex-grow flex  justify-center">
          <Appcontext.Provider value={data}>
            <ContainerContent>
              <ContainerBackground>
                <ProfileImage />
              </ContainerBackground>
              <ContainerHeader>
                <ProfileMetadata title={"Followers"} content={data.followers} />
                <ProfileMetadata title={"Following"} content={data.following} />
                <ProfileMetadata title={"Location"} content={data.location} />
              </ContainerHeader>
              <ContainerSubHeader>
                <ProfileName />
                <ProfileBio />
              </ContainerSubHeader>
              <ContainerBody>
                {data.repositories &&
                  data?.repositories.slice.map((repo, i) => {
                    return (
                      <RepoCard
                        key={i}
                        top={
                          <div>
                            <RepoCard.Name name={repo.name} />
                          </div>
                        }
                        middle={
                          <div>
                            <RepoCard.Description
                              description={repo.description}
                            />
                          </div>
                        }
                        bottom={
                          <div className="flex items-center gap-3">
                            {repo.license && (
                              <RepoCard.License license={repo.license.name} />
                            )}
                            <RepoCard.ForkNumber number={repo.forks} />
                            <RepoCard.Stargazers number={repo.stars} />
                            <RepoCard.UpdateStatus day={repo.updated} />
                          </div>
                        }
                      />
                    );
                  })}
                {!toggleAllRepos && (
                  <button
                    className="col-span-full text-[#CDD5E0]"
                    onClick={(e) => {
                      setToggleAllRepos(true);
                      setShowAllRepos(true);
                    }}
                  >
                    View all repositories
                  </button>
                )}
                {showAllRepos &&
                  data.repositories &&
                  data?.repositories.remains.map((repo, i) => {
                    return (
                      <RepoCard
                        key={i}
                        top={
                          <div>
                            <RepoCard.Name name={repo.name} />
                          </div>
                        }
                        middle={
                          <div>
                            <RepoCard.Description
                              description={repo.description}
                            />
                          </div>
                        }
                        bottom={
                          <div className="flex items-center gap-3">
                            {repo.license && (
                              <RepoCard.License license={repo.license.name} />
                            )}
                            <RepoCard.ForkNumber number={repo.forks} />
                            <RepoCard.Stargazers number={repo.stars} />
                            <RepoCard.UpdateStatus day={repo.updated} />
                          </div>
                        }
                      />
                    );
                  })}
              </ContainerBody>
            </ContainerContent>
          </Appcontext.Provider>
        </main>
      )}
    </>
  );
};

export default Container;
