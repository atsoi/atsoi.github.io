$(document).ready(function (){
  function getActiveLink(){
    var link = $('a[href="'+ '/' + window.location.pathname.split('/')[1] + '"]');
    if (link.length > 0){
      return link
    } else {
      if (window.hasOwnProperty('pageConfig')) {
        return $('a[href="' + '/' + window.pageConfig.pageType + '"]');
      }
    }
  }

  var link = getActiveLink();

  if (link){
    console.log(link);
    link.addClass('active');
}

});
