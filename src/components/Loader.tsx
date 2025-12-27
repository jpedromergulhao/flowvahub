import logo from '../assets/logo2.png';

export default function Loader() {
  return (
    <div className="flex items-center justify-center overflow-hidden bg-white relative z-[999] min-h-screen">
      <div className="relative inline-block px-5 animate-pulse-soft">
        <img
          src={logo}
          alt="Flowva Logo"
          className="w-[200px] relative z-[2]"
          loading="eager"
        />

        <div
          className="
            absolute top-0 left-[-100%] w-[120%] h-full
            bg-light-sweep
            skew-x-[-20deg]
            animate-sweep
            z-[3]
          "
        />
      </div>
    </div>
  );
}
