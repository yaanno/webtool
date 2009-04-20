= Webtool

Webtool is a set of ant tasks to make the developer's life easier when a new prototype (wireframe) based site is to be created.

It is supposed to do the following (well, some day):

* Get external CSS and JavaScript libraries
* Integrate external libraries
* Clone an existing prototype
* Customize the new wireframe by variables
* Concatenate/Compress CSS and JavaScript files
* Build wireframes for testing, staging and production

== Libraries used

* Ant
* Ant contrib
* JSMin
* YUI Compressor

== On variables

Variables are defined in property files for easy access. Site specific variables should work through all layers: HTML, CSS and JavaScript. For example you can set in site.properties:

sitename=mysite
default_heading_color=#333

and use in your CSS:

h3.sitename{
  color: default_heading_color
}

and in your JS:

var tagline = $("sitename-tagline");

and in you HTML of course:

<p class="sitename-tagline">A really cool example</p>