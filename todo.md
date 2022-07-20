newImage
  ~~ should be fetched in bg and cached ~~
  ~~  - it is, but it's only the link, need another canvas to getImageData ~~
  ~~ refresh should load cached newImage and revalidate/mutate (refetch) in bg ~~
  ~~seems to be rerendering too many times - error from unsplash~~
  loads from refresh only once - need to switch to tanstack and implement mutate

icon btns in header
  github - will link to this repo obv
  darkmode - btn works, need to setup actual modes/themes

btns
  only sort should be filled, others should be outlined

thresh
  thumb or fill (or both) should respond to invert checked
  if only thumb responds, then fill should match unfilled

mobile?

colors/design

sort mode
  ~~line spacing in select~~ ~~not possible, set dropdown height instead~~
  possible? - change threshold to match hsl - 0-359 for hue, 0-99 for sat & lightness