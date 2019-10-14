window.onload = function () {
  const vdo = document.getElementsByTagName('video')[0]
  const btn = document.getElementsByClassName('btn')[0]
  const layer = document.getElementsByClassName('video-layer')[0]

  btn.onclick = function () {
    show()
    playPause()
  }

  vdo.onclick = function (e) {
    e.stopPropagation()
    playPause()
  }

  layer.onclick = function () {
    hidden()
    vdo.pause()
  }

  function show() {
    layer.style.display = 'block'
  }

  function hidden() {
    layer.style.display = 'none'
  }

  function playPause() {
    if (vdo.paused)
      vdo.play();
    else
      vdo.pause();
  }
}
