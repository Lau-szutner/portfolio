'use client';

import { useEffect, useState } from 'react';
import GithubLogo from '../../assets/github/GithubLogo';
import Arrow from '../../assets/github/arrow';
import StatCard from './StatCard';

type GitHubStats = {
  repos: number;
  stars: number;
  forks: number;
  commits: string; // Lo dejamos como string por si quieres poner 2500+ manual
};

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 0,
    stars: 0,
    forks: 0,
    commits: '500+', // Ejemplo: ponlo fijo o calcula real
  });

  useEffect(() => {
    const fetchStats = async () => {
      const username = 'lau-szutner';
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userRes.json();

      const reposRes = await fetch(userData.repos_url);
      const reposData = await reposRes.json();

      console.log(reposData);
      const stars = reposData.reduce(
        (acc: number, repo: any) => acc + repo.stargazers_count,
        0,
      );
      const forks = reposData.reduce(
        (acc: number, repo: any) => acc + repo.forks_count,
        0,
      );

      setStats({
        repos: userData.public_repos,
        stars,
        forks,
        commits: '500+',
      });
    };

    fetchStats();
  }, []);

  return (
    <div
      className="flex flex-col gap-5 grid place-items-center w-full pt-30"
      id="Github"
    >
      <section className="py-20 relative w-9/12 place-self-center">
        <div className="w-full mx-auto grid gap-5 place-items-center">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-4">GitHub Public Stats</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A visualization of my coding activities and contributions on
              GitHub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center w-full">
            <StatCard
              icon={<GithubLogo />}
              value={stats.repos}
              label="Repositories"
            />
            <StatCard
              icon={
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4807 3.50102C11.6729 3.03905 12.3273 3.03905 12.5195 3.50102L14.6454 8.61248C14.7264 8.80724 14.9096 8.94031 15.1199 8.95716L20.6381 9.39956C21.1369 9.43954 21.3391 10.062 20.9591 10.3875L16.7548 13.9889C16.5946 14.1261 16.5246 14.3414 16.5736 14.5466L17.858 19.9315C17.9741 20.4182 17.4447 20.8028 17.0177 20.542L12.2933 17.6564C12.1133 17.5465 11.8869 17.5465 11.7069 17.6564L6.98251 20.542C6.55551 20.8028 6.02606 20.4182 6.14215 19.9315L7.42664 14.5466C7.47558 14.3414 7.40562 14.1261 7.24543 13.9889L3.04111 10.3875C2.66112 10.062 2.86335 9.43954 3.36209 9.39956L8.88034 8.95716C9.0906 8.94031 9.27375 8.80724 9.35476 8.61248L11.4807 3.50102Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              value={stats.stars}
              label="Stars"
            />
            <StatCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  // class="icon icon-tabler icons-tabler-outline icon-tabler-git-fork"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
                  <path d="M12 12l0 4" />
                </svg>
              }
              value={stats.forks}
              label="Forks"
            />
            <StatCard
              icon={
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.75 12.7546C12.75 13.1689 12.4142 13.5046 12 13.5046C11.5858 13.5046 11.25 13.1689 11.25 12.7546C11.25 12.3404 11.5858 12.0046 12 12.0046C12.4142 12.0046 12.75 12.3404 12.75 12.7546Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M7.5 15.7546C7.91421 15.7546 8.25 15.4189 8.25 15.0046C8.25 14.5904 7.91421 14.2546 7.5 14.2546C7.08579 14.2546 6.75 14.5904 6.75 15.0046C6.75 15.4189 7.08579 15.7546 7.5 15.7546Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M8.25 17.2546C8.25 17.6689 7.91421 18.0046 7.5 18.0046C7.08579 18.0046 6.75 17.6689 6.75 17.2546C6.75 16.8404 7.08579 16.5046 7.5 16.5046C7.91421 16.5046 8.25 16.8404 8.25 17.2546Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M9.75 15.7546C10.1642 15.7546 10.5 15.4189 10.5 15.0046C10.5 14.5904 10.1642 14.2546 9.75 14.2546C9.33579 14.2546 9 14.5904 9 15.0046C9 15.4189 9.33579 15.7546 9.75 15.7546Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M10.5 17.2546C10.5 17.6689 10.1642 18.0046 9.75 18.0046C9.33579 18.0046 9 17.6689 9 17.2546C9 16.8404 9.33579 16.5046 9.75 16.5046C10.1642 16.5046 10.5 16.8404 10.5 17.2546Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M12 15.7546C12.4142 15.7546 12.75 15.4189 12.75 15.0046C12.75 14.5904 12.4142 14.2546 12 14.2546C11.5858 14.2546 11.25 14.5904 11.25 15.0046C11.25 15.4189 11.5858 15.7546 12 15.7546Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M12.75 17.2546C12.75 17.6689 12.4142 18.0046 12 18.0046C11.5858 18.0046 11.25 17.6689 11.25 17.2546C11.25 16.8404 11.5858 16.5046 12 16.5046C12.4142 16.5046 12.75 16.8404 12.75 17.2546Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M14.25 15.7546C14.6642 15.7546 15 15.4189 15 15.0046C15 14.5904 14.6642 14.2546 14.25 14.2546C13.8358 14.2546 13.5 14.5904 13.5 15.0046C13.5 15.4189 13.8358 15.7546 14.25 15.7546Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M15 17.2546C15 17.6689 14.6642 18.0046 14.25 18.0046C13.8358 18.0046 13.5 17.6689 13.5 17.2546C13.5 16.8404 13.8358 16.5046 14.25 16.5046C14.6642 16.5046 15 16.8404 15 17.2546Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M16.5 15.7546C16.9142 15.7546 17.25 15.4189 17.25 15.0046C17.25 14.5904 16.9142 14.2546 16.5 14.2546C16.0858 14.2546 15.75 14.5904 15.75 15.0046C15.75 15.4189 16.0858 15.7546 16.5 15.7546Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M15 12.7546C15 13.1689 14.6642 13.5046 14.25 13.5046C13.8358 13.5046 13.5 13.1689 13.5 12.7546C13.5 12.3404 13.8358 12.0046 14.25 12.0046C14.6642 12.0046 15 12.3404 15 12.7546Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M16.5 13.5046C16.9142 13.5046 17.25 13.1689 17.25 12.7546C17.25 12.3404 16.9142 12.0046 16.5 12.0046C16.0858 12.0046 15.75 12.3404 15.75 12.7546C15.75 13.1689 16.0858 13.5046 16.5 13.5046Z"
                    fill="#ffffff"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.75 2.25464C7.16421 2.25464 7.5 2.59043 7.5 3.00464V4.50464H16.5V3.00464C16.5 2.59043 16.8358 2.25464 17.25 2.25464C17.6642 2.25464 18 2.59043 18 3.00464V4.50464H18.75C20.4069 4.50464 21.75 5.84778 21.75 7.50464V18.7546C21.75 20.4115 20.4069 21.7546 18.75 21.7546H5.25C3.59315 21.7546 2.25 20.4115 2.25 18.7546V7.50464C2.25 5.84778 3.59315 4.50464 5.25 4.50464H6V3.00464C6 2.59043 6.33579 2.25464 6.75 2.25464ZM20.25 11.2546C20.25 10.4262 19.5784 9.75464 18.75 9.75464H5.25C4.42157 9.75464 3.75 10.4262 3.75 11.2546V18.7546C3.75 19.5831 4.42157 20.2546 5.25 20.2546H18.75C19.5784 20.2546 20.25 19.5831 20.25 18.7546V11.2546Z"
                    fill="#ffffff"
                  />
                </svg>
              }
              value={stats.commits}
              label="Commits"
            />
          </div>

          <div className={`w-full h-fit !box-border relative group`}>
            <div className="absolute inset-0 rounded-md bg-[var(--tint)] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

            <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[var(--tint)]">
              <div className="flex items-center mb-4">
                <span className="text-cyan-400 mr-2">
                  <Arrow></Arrow>
                </span>
                <h3 className="text-xl font-semibold">Contribution Activity</h3>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={`https://ghchart.rshah.org/008005/lau-szutner`}
                  alt="GitHub Contribution Graph"
                  className="w-full filter brightness-110"
                />
              </div>

              <div className="flex justify-between px-2 mt-3 text-xs text-gray-400">
                <span>12 months ago</span>
                <span>6 months ago</span>
                <span>Now</span>
              </div>
            </div>
          </div>

          <div className={`w-full h-fit !box-border relative group`}>
            <div className="absolute inset-0 rounded-md bg-[var(--tint)] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

            <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[var(--tint)]">
              <div className="grid lg:grid-cols-2 gap-6 mx-auto place-items-center">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=lau-szutner&show_icons=true&hide_border=true&title_color=ffffff&icon_color=00ffea&&text_color=ffffff&bg_color=00000000`}
                  alt="GitHub Stats"
                  className="w-12/12"
                />
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=lau-szutner&layout=compact&hide_border=true&title_color=ffffff&icon_color=4ade80&text_color=ffffff&bg_color=00000000&exclude_repo=BookUp,Cripto-Merch,Razer-Bootsrap`}
                  alt="Top Languages"
                  className="w-11/12"
                />
              </div>
            </div>
          </div>

          <div className={`w-fit h-fit !box-border relative group`}>
            <div className="absolute inset-0 rounded-md bg-[var(--tint)] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

            <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[var(--tint)]">
              <a
                href="https://github.com/lau-szutner"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐱‍💻 View Full GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
