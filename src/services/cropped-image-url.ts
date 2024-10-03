export const croppedImageUrl = (url: string) => {
  const dividePoint = 'media/'
  const divideIndex = url.indexOf(dividePoint) + dividePoint.length

  return url.slice(0, divideIndex) + 'crop/600/400/' + url.slice(divideIndex)
}
