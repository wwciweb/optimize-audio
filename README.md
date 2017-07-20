# optimize-audio
Optimizes audio for web via gulp and ffmpeg

## Installation

### npm dependencies
`npm install`

### ffmpeg
On macOS, ffmpeg is easiest installed with brew.

Install brew:

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Then, install ffmpeg:

`brew install ffmpeg --with-fdk-aac --with-tools --with-freetype --with-libass --with-libvorbis --with-libvpx --with-x265`

## Usage

Files with the `.wav` extension in `src/` are converted to either MP3 or Opus/WebM, depending on the command.

### Convert wav to MP3

`gulp mp3`

### Convert wav to Opus/WebM

`gulp webm`
