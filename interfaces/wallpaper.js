type chrome$WallpaperLayout = 'CENTER' | 'CENTER_CROPPED' | 'STRETCH';

type chrome$wallpaper = {
  setWallpaper(details: {
    data?: ArrayBuffer,
    filename: string,
    layout: chrome$WallpaperLayout,
    thumbnail?: boolean,
    url?: string,
  }, callback: (thumbnail?: ArrayBuffer) => void): void
}
