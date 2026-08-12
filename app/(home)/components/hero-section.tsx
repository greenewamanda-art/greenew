import { HERO_VIDEO_SRC } from "../content";

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative aspect-video">
        <iframe
          src={HERO_VIDEO_SRC}
          title="Vídeo institucional Greenew"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-full w-full rounded-lg border-0"
        />
      </div>
    </section>
  );
}
