newImage
  ~~works finally, but also fetching on reset, because reset sets sortedImage to undefined, which causes newImageObject to render, which imvalidates the query~~
  wrong type of data ~~refactor to use initialData in useNewImage hook for initImage~~

imageSort
  a spinner if processing is slow

reset
  should cache sort if settings don't change

icon btns in header
  github - will link to this repo obv
  ~~darkmode - btn works, need to setup actual modes/themes~~

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

