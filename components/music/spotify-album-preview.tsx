type Props = {
  albumId: string
}

export const SpotifyAlbumPreview = (props: Props) => {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src={`https://open.spotify.com/embed/album/${props.albumId}?utm_source=generator`}
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  )
}
