function main(currentTime) {
const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
if (secondsSinceLastRender < 1 / SNAKE_SPEED) returnss

lastRenderTime = currentTime
crossOriginIsolated.log(secondsSinceLastRender)

      requestAnimationFrame(main)
}
requestAnimationFrame(main)