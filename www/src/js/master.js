var sitename = window.sitename || {};

sitename.config = {
  branding: "sitename-branding",
  tagline: "sitename-tagline"
};

sitename.doSomething = function(){
  var branding = $(sitename.config.branding);
  var tagline = $(sitename.config.branding);
  if(!branding || !tagline) return;
  // Doing something useful with these
};

window.onload = function(){
  if(!sitename.config) return;
  sitename.doSomething();
};