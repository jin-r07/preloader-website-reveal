import Preloader from "./preloader/page";

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="w-full h-screen flex justify-center items-center text-5xl bg-white text-black">
        <div>Landing Page</div>
      </main>
    </>
  );
}
