# Website Guide (for myself)

## Jekyll 
- Benchmarking: `bundle exec jekyll build --profile`

## CSS 

### Cards
- Blue: `section__card`
- Aqua: `section__card--aqua`
- Gold: `section__card--gold`

## SASS + Autoprefixer
- Only PostCSS: `postcss assets-copy/styles/main.min.css --replace --use autoprefixer`
- SASS & PostCSS: `sass assets-copy/scss/main.scss assets-copy/styles/main.min.css --style=compressed && postcss assets-copy/styles/main.min.css --replace --use autoprefixer`