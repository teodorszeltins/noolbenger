Tiny tool to detect if a page visitor has Honey Chrome extension installed and running.

## Demo

[https://tedsomething.github.io/noolbenger](https://tedsomething.github.io/noolbenger)

## Why?

Honey, a popular browser extension, has recently been [revealed to scam both users and content creators](https://www.youtube.com/watch?v=vc4yL3YTwWk). Unfortunately, many of Honey’s users still remain unaware. If you are a website owner, you can use this detection script to warn them about the risks of using Honey.

## Usage

### Using as npm package

Install the `noolbenger` npm package:

```
npm install noolbenger
```

Run the check in your code:

```
import noolbenger from "noolbenger"

let foundHoney = await noolbenger.track()
```
