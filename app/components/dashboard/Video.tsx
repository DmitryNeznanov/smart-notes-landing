export default function Video() {
  return (
    <section
      className="py-[64px]"
      id="video"
    >
      <div className="container">
        <video
          className="w-screen rounded-[20px] "
          src="/videos/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4"
          controls
          muted
          poster="/videos/preview.png"
        ></video>
      </div>
    </section>
  )
}
