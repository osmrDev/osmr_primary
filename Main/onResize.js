var ResizeCallStack = [];

ResizeCallStack.push(function() {
  console.log("resized w:" + window.innerWidth + " h:" + window.innerHeight)

  //PixelSize = window.innerWidth/768
})


addEventListener("resize", (event) => {
  for(var i = 0; i < ResizeCallStack.length; i++) {
      ResizeCallStack[i]();
  }
});
