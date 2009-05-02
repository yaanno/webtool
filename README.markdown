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

=== Why JSMin and YUI Compressor?

You might ask why both? Using JSMin for compressing JavaScript is my
personal taste (plus you may chose not to do the uglify job :P)

== Dependencies

* Some Java JDK
* Apache Ant

=== JDK

I prefer SUN's Java SDK but the tool works well with other JDKs.

=== Apache Ant

Install it separately. It has other great tools bundled. See
http://ant.apache.org Add Ant's bin directory to your PATH eg.

export LIB_PATH="/home/janos/lib"
export ANT_HOME="$LIB_PATH/ant"
export PATH=$ANT_HOME:$PATH

== On variables

Variables are defined in property files for easy access. Site specific variables should work through all layers: HTML, CSS and JavaScript. For example you can set in site.properties:

SITENAME=mysite
DEFAULT_HEADING_COLOR=#333

and use in your CSS:

    h3.SITENAME{
     color: default_heading_color
    }

and in your JS:

    var tagline = $("SITENAME-tagline");

and in your HTML of course:

    <p class="SITENAME-tagline">A really cool example</p>
