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
                scalable, reliable, data-intensive and AI-powered systems using{" "}
                <span className="font-semibold">
                  Python , TypeScript , NextJS , Java/Spring Boot, Node.js,
                </span>
                , with production experience across{" "}
                <span className="font-semibold">
                  PostgreSQL, MongoDB, Elasticsearch/OpenSearch, and AWS
                </span>
                , and an AI/ML stack that includes{" "}
                <span className="font-semibold">
                  NumPy, Pandas, scikit-learn, PyTorch, TensorFlow, LangChain,
                  LlamaIndex, and OpenAI/Gemini APIs
                </span>
                .
              </p>

              {/* New FETCH Pay + AI paragraph */}
              <p className="text-white">
                I’ve got solid experience working as a Software Developer at{" "}
                <a
                  href="https://fetchpay.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline font-semibold"
                >
                  FETCH Pay
                </a>
                , where I led backend architecture for the{" "}
                <span className="font-semibold">
                  TreeFlow Integration System
                </span>
                . I implemented a general tree with cross-referencing using{" "}
                <span className="font-semibold">
                  Python, TypeScript, PostgreSQL, MongoDB, and Docker
                </span>{" "}
                to ensure configurations reliably flowed down to child nodes. I
                move across the stack and learn fast: I’ve built end-to-end
                systems at the intersection of backend{" "}
                <span className="font-semibold">
                  (Python with FastAPI, Node.js, PostgreSQL, MongoDB)
                </span>
                , infrastructure{" "}
                <span className="font-semibold">(AWS, Docker)</span> (
                <a
                  href="https://maniya-kohli.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  portfolio
                </a>
                ), and recently dove deep into AI ,architecting a travel agent
                from scratch with{" "}
                <span className="font-semibold">
                  RAG, vector databases (Chroma), LLM orchestration (OpenAI /
                  Gemini APIs), and a React/Next.js frontend
                </span>
                . I’m comfortable moving between backend logic, API design,
                database scaling, cloud infra, and frontend—whatever it takes to
                ship.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I care about building systems that scale gracefully and fail
                    safely , clean interfaces, strong observability, and
                    automation over toil. My projects span integration
                    frameworks, transactional loyalty flows with rollback
                    guarantees, archival pipelines for enterprise data, and
                    AI-powered agents, always with an eye on reliability,
                    developer ergonomics, and measurable impact.
                  </p>

                  <div className="mt-6 space-y-1">
                    <cite className="block font-medium text-white">
                      Maniya Kohli - Software Development Engineer
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

              {/* Skills / stack footer with clear AI/ML + RAG emphasis */}
              <div className="pt-2 text-sm text-zinc-300 space-y-1">
                <p>
                  <span className="font-semibold">Core Tools & AI/ML:</span>{" "}
                  Python, Node.js, Java, C/C++, TypeScript, NumPy, Pandas,
                  scikit-learn, PyTorch, TensorFlow, Jupyter, OpenAI API, Gemini
                  API, Hugging Face Transformers.
                </p>
                <p>
                  <span className="font-semibold">
                    Databases (SQL/NoSQL & Vector):
                  </span>{" "}
                  MongoDB, PostgreSQL, MySQL, OpenSearch/Elasticsearch,
                  pgvector, Pinecone, ChromaDB.
                </p>
                <p>
                  <span className="font-semibold">Cloud/DevOps:</span> AWS,
                  Docker, Grafana.
                </p>
                <p>
                  <span className="font-semibold">
                    Frameworks (Backend & LLM/RAG):
                  </span>{" "}
                  Spring Boot, FastAPI, LangChain, LlamaIndex, Next.js, React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
