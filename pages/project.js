
import Navbar from "../components/Navbar";
import Head from "next/head";
import Link from "next/link";

function Portfolio() {
  return (
    <>
      <Head>
        <title>Project</title>
        <link rel="icon" href="/head.ico" />
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Project</h1>
            <p className="description">사진을 클릭하면 사이트로 이동합니다.</p>

            <section>
              <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                  <li>
                    <Link
                      href="https://github.com/JBUkim/Time-Course"
                      class="group relative block bg-black"
                      target="_blank"
                    >
                      <img
                        alt="Developer"
                        src="/images/web1.png"
                        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                      />

                      <div class="relative p-8">
                        <p class="text-sm font-bold uppercase tracking-widest text-pink-500">
                          Project
                        </p>

                        <p class="text-2xl font-bold text-white">Time Course</p>

                        <div class="mt-64">
                          <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <div class="text-sm text-white">
                              중부대학교 수강신청 사이트 리메이크 프로젝트
                              입니다.
                              <br></br>
                              <p className="text-pink-400 font-bold">
                                사용언어: Node.js, MySQL
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://github.com/JBUkim/JBU-Drive"
                      class="group relative block bg-black"
                      target="_blank"
                    >
                      <img
                        alt="Developer"
                        src="/images/hard_drive2.jpg"
                        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                      />

                      <div class="relative p-8">
                        <p class="text-sm font-bold uppercase tracking-widest text-pink-500">
                          Project
                        </p>

                        <p class="text-2xl font-bold text-white">JBU Drive</p>

                        <div class="mt-64">
                          <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <div class="text-sm text-white">
                              여러가지 기능을 합친 다용도 웹사이트 입니다.
                              <br />
                              <p className="text-pink-400 font-bold">
                                사용언어: Node.js, MySQL
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://github.com/JBUkim/TODO"
                      class="group relative block bg-black"
                      target="_blank"
                    >
                      <img
                        alt="Developer"
                        src="/images/web3.PNG"
                        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                      />

                      <div class="relative p-8">
                        <p class="text-sm font-bold uppercase tracking-widest text-pink-500">
                          Project
                        </p>

                        <p class="text-2xl font-bold text-white">To Do List</p>

                        <div class="mt-64">
                          <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <div class="text-sm text-white">
                              SNS와 Scedular 두가지 기능을 결합한 소셜네트워크
                              사이트입니다.
                              <br />
                              <p className="text-pink-400 font-bold">
                                사용언어: Python, PostgreSQL
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://bat2.vercel.app/"
                      class="group relative block bg-black"
                      target="_blank"
                    >
                      <img
                        alt="Developer"
                        src="/images/web5.PNG"
                        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                      />

                      <div class="relative p-8">
                        <p class="text-sm font-bold uppercase tracking-widest text-pink-500">
                          Project
                        </p>

                        <p class="text-2xl font-bold text-white">Was</p>

                        <div class="mt-64">
                          <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <div class="text-sm text-white">
                              외부 API를 이용한 Next.js 웹사이트 예제 사이트
                              입니다.
                              <br />
                              <p className="text-pink-400 font-bold">
                                사용언어: Next.js, Tailwindcss
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://next-shop-7lik.vercel.app/"
                      class="group relative block bg-black"
                      target="_blank"
                    >
                      <img
                        alt="Developer"
                        src="/images/web6.PNG"
                        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                      />

                      <div class="relative p-8">
                        <p class="text-sm font-bold uppercase tracking-widest text-pink-500">
                          Project
                        </p>

                        <p class="text-2xl font-bold text-white">Next Shop</p>

                        <div class="mt-64">
                          <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <div class="text-sm text-white">
                              다양한 암호기술과 Next.js를 이용한 웹커머스
                              사이트이니다.
                              <br />
                              <p className="text-pink-400 font-bold">
                                사용언어: Next.js, MongoDB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://lets-festival-one.vercel.app/"
                      class="group relative block bg-black"
                      target="_blank"
                    >
                      <img
                        alt="Developer"
                        src="/images/web4.PNG"
                        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                      />

                      <div class="relative p-8">
                        <p class="text-sm font-bold uppercase tracking-widest text-pink-500">
                          Project
                        </p>

                        <p class="text-2xl font-bold text-white">
                          Let&#39;s Festival
                        </p>

                        <div class="mt-64">
                          <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <div class="text-sm text-white">
                              FallGuys팀과 함께만든 축제소개 사이트입니다.
                              <br />
                              <p className="text-pink-400 font-bold">
                                사용언어: Next.js, MongoDB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
