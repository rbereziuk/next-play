export const croppedImageUrl = (url: string) => {
  if (!url) return 'https://placehold.co/600x400?text=Placeholder+Image'
  const dividePoint = 'media/'
  const divideIndex = url.indexOf(dividePoint) + dividePoint.length

  return url.slice(0, divideIndex) + 'crop/600/400/' + url.slice(divideIndex)
}
