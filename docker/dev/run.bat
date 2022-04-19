SET JEKYLL_VERSION=3.8

docker run --name saibrotech-site --rm ^
  -p 4000:4000 ^
  --volume="%cd%:/srv/jekyll" ^
  -it jekyll/jekyll:%JEKYLL_VERSION% ^
  jekyll serve
