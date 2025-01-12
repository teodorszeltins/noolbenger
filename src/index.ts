const track = async () => {
  try {
    await fetch(
      'chrome-extension://bmnlcjabgnpnenekpadlanbbkooimhnj/checkoutPaypal/merchantSPBContent.js',
    )

    return true
  } catch {
    return false
  }
}

const noolbenger = {
  track,
}

export default noolbenger
