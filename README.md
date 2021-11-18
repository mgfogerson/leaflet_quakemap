For the web mapping challenge, I used a GeoJSON API to pull data from the USGS to fill and create markers over notable earthquakes. The markers are variable in size based on the magnitude of the earthquake, while the color is decided by the depth of the earthquake. 

  Blue dots, for instance, are all earthquakes recorded at 0km depth or lower, a category that exists because earthquake measurements are often accurate within several km. By clicking on larger dots, we can see some earthquakes that made the news, such as large quakes in Haiti. The map itself is plotted with the Leaflet library in Javascript.
  
  
<img width="794" alt="Screen Shot 2021-11-17 at 4 08 48 PM" src="https://user-images.githubusercontent.com/79113826/142302153-8d9bdfab-14f4-421c-9ec3-3c7e4b015064.png">

Here is the project running on my website at https://mgfogerson.github.io/projects/quakemap, with the addition of tectonic plate lines
