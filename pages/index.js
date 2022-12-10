import Navbar from "../components/Navbar";
import Head from "next/head";
import Animation from "../components/Animation";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text_wrapper">
            <h1 className="font-semibold text-5xl mt-0 mb-3">Kim Dahyuk</h1>
            <p className="description">
              중부대학교 정보보호학과 18학번 김다혁 입니다.
              <br />
              웹 어플리케이션 보안 수업을 수강하며 웹을 공부중입니다.
              <br />
              현재 FallGuys 팀원들과 프로젝트를 진행중입니다.
            </p>

            <Link
              class="mt-8 group relative inline-flex items-center overflow-hidden border-current
              rounded border border-gray-600 bg-gray-600 px-8 py-3 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500"
              href="/project"
            >
              <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span class="text-sm font-medium transition-all group-hover:mr-4">
                Project
              </span>
            </Link>

              <Link
                class="mt-8 ml-3 group relative inline-flex items-center
                overflow-hidden border-current rounded border border-gray-600
                bg-gray-600 px-8 py-3 text-white hover:bg-transparent
                hover:text-gray-600 focus:outline-none focus:ring
                active:text-gray-500" href="https://github.com/JBUkim" >
                <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                  <SiGithub></SiGithub>
                </span>
                <span class="text-sm font-medium transition-all group-hover:mr-4">
                  GitHub
                </span>
              </Link>
            
          </div>

          <div className="image-wrapper">
            <Animation />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
