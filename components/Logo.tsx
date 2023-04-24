import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image width={32} height={32} src="/images/bullseye.svg" alt="Logo" />
      <h1 className="font-semibold text-2xl">Focus Buddy</h1>
    </div>
  );
};

export default Logo;
