import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-2xl text-4xl font-medium lg:text-5xl text-white">
            Software Development Engineer & Backend Problem-Solver
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Engineer crafting scalable backend systems"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I’m <span className="font-semibold">Maniya Kohli</span>,
                a Software Development Engineer currently pursuing an M.S. in
                Computer Science at San Francisco State University. I build
                scalable, reliable, data-intensive systems using{" "}
                <span className="font-semibold">
                  Java/Spring Boot, Python, Node.js, and TypeScript
                </span>
                , with production experience across{" "}
                <span className="font-semibold">
                  PostgreSQL, MongoDB, Elasticsearch/OpenSearch
                </span>
                , and <span className="font-semibold">AWS</span>.
              </p>

              <p className="text-white">
                Previously at CoreValue Technology, I engineered a general-tree,
                cross-referenced configuration platform that streamlined data
                management—
                <span className="font-semibold">
                  cutting retrieval times by ~30% and improving consistency by
                  ~40%
                </span>
                . I also led large-scale data migrations (
                <span className="font-semibold">17–18M records</span>) across
                Elasticsearch→OpenSearch and MongoDB→PostgreSQL with
                <span className="font-semibold"> 99.9% data integrity</span> and
                ~<span className="font-semibold">30% downtime reduction</span>,
                and designed a loyalty/billing integration that supported
                QR-based bill splitting and point redemption.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I care about building systems that scale gracefully and fail
                    safely—clean interfaces, strong observability, and
                    automation over toil. My projects span integration
                    frameworks, transactional loyalty flows with rollback
                    guarantees, and archival pipelines for enterprise
                    data—always with an eye on reliability, developer
                    ergonomics, and measurable impact.
                  </p>

                  <div className="mt-6 space-y-1">
                    <cite className="block font-medium text-white">
                      Maniya Kohli — Software Development Engineer
                    </cite>
                    <div className="text-sm text-zinc-300 space-y-1">
                      <p>
                        San Francisco, CA ·{" "}
                        <a
                          className="underline"
                          href="mailto:maniyakohli07@gmail.com"
                        >
                          maniyakohli07@gmail.com
                        </a>{" "}
                        ·{" "}
                        <a className="underline" href="tel:+14154908789">
                          +1 (415) 490-8789
                        </a>
                      </p>
                      <p className="flex flex-wrap gap-3">
                        <a
                          className="underline"
                          href="https://www.linkedin.com/in/maniya-kohli-719577223/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          LinkedIn
                        </a>
                        <a
                          className="underline"
                          href="https://github.com/Maniya-Kohli"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      </p>
                    </div>
                  </div>
                </blockquote>
              </div>

              <div className="pt-2 text-sm text-zinc-300">
                <p>
                  Core tools: Python, Node.js, Java, C/C++, TypeScript ·
                  Databases: MongoDB, PostgreSQL, OpenSearch/Elasticsearch,
                  MySQL · Cloud/DevOps: AWS, Docker, Grafana · Frameworks:
                  Spring Boot
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
