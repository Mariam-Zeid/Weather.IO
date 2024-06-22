/**
 * Returns the URL of the image file with the given name from the assets/img/weather_icons directory.
 * @param {string} name - The name of the image file without the extension.
 * @return {string} The URL of the image file.
 */
export function getImageURL(name) {
  return new URL(`../assets/img/weather_icons/${name}.png`, import.meta.url)
    .href;
}
