var SITENAME = window.SITENAME || {};

SITENAME.config = {
  branding: "SITENAME-branding",
  tagline: "SITENAME-tagline"
};

SITENAME.doSomething = function(){
  var branding = $(SITENAME.config.branding);
  var tagline = $(SITENAME.config.branding);
  if(!branding || !tagline) return;
  // Doing something useful with these
};

window.onload = function(){
  if(!SITENAME.config) return;
  SITENAME.doSomething();
};