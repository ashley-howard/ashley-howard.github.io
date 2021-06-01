# Website Guide (for myself)

## Jekyll 
- Benchmarking: `bundle exec jekyll build --profile`

## CSS 

### Cards
- Blue: `section__card`
- Aqua: `section__card--aqua`
- Gold: `section__card--gold`

## SASS + Autoprefixer
- Only PostCSS: `postcss assets/styles/main.min.css --replace --use autoprefixer`
- SASS & PostCSS: `sass assets/scss/main.scss assets/styles/main.min.css --style=compressed && postcss assets/styles/main.min.css --replace --use autoprefixer`