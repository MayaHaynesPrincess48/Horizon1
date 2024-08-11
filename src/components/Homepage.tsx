import Hero from "./Hero";

function Homepage() {
  return (
    <main
      id="homepage"
      className="flex h-full w-full flex-col bg-white pt-[88px]"
    >
      <Hero />
    </main>
  );
}

export default Homepage;

{
  /* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
  <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
    Welcome to <span className="text-[hsl(280,100%,70%)]">Horizon</span>
  </h1>
</div>
</main> */
}
