# JP Feliciano Photography

Automotive photography portfolio by JP Feliciano.

This website showcases a curated collection of my automotive photography, featuring static compositions, rolling shots, motorsports, and automotive events. Every image retains its EXIF metadata, allowing viewers to explore the camera settings used to capture each photograph.

## Portfolio

**Website:** https://johnpaulfeliciano98.github.io/photography/

## About

I'm an automotive photographer based in Southern California with a passion for capturing the engineering, design, and emotion behind every vehicle. My goal is to create clean, timeless imagery that showcases every car at its absolute best.

## Equipment

### Camera
- Canon EOS R10

### Lenses
- Canon RF-S 18–45mm f/4.5–6.3 IS STM
- Canon RF 50mm f/1.8 STM
- Canon EF-S 55–250mm f/4–5.6 IS STM (via Canon EF-EOS R Adapter)

## Features

- Responsive photography portfolio
- High-resolution image gallery
- Automatic EXIF metadata display
- Mobile-friendly design
- GitHub Pages hosting
- Automatic image resizing and thumbnail generation

## Running Locally

Clone the repository:

```bash
git clone https://github.com/johnpaulfeliciano98/jp-feliciano-photography.git
cd jp-feliciano-photography
```

Install dependencies:

```bash
bundle install
npm install
```

Start the local development server:

```bash
bundle exec jekyll serve
```

Open your browser to:

```
http://127.0.0.1:4000
```

## Image Processing

To generate optimized images and thumbnails:

1. Place your original images in the `images/` directory.
2. Run:

```bash
npx gulp resize
```

This generates:

```
images/fulls/
images/thumbs/
```

## Built With

- Jekyll
- GitHub Pages
- Gulp
- Sass (SCSS)
- HTML5
- CSS3
- JavaScript

## Connect

- **Instagram:** https://www.instagram.com/felicijo.jpg/
- **LinkedIn:** https://www.linkedin.com/in/jp-feliciano/

## License

The website source code is licensed under the license included in this repository.

All photographs are © JP Feliciano. Unauthorized reproduction, redistribution, or commercial use of any photographs contained within this repository or on the published website is prohibited without prior written permission.
