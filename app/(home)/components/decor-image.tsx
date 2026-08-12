import Image from "next/image";

type DecorImageProps = {
  src: string;
  width: number;
  height: number;
  className: string;
};

export default function DecorImage({
  src,
  width,
  height,
  className,
}: DecorImageProps) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      width={width}
      height={height}
      className={`pointer-events-none absolute ${className}`}
    />
  );
}
