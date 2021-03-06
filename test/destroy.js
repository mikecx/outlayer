test( 'destroy', function() {

  'use strict';

  var container = document.querySelector('#destroy');
  var layout = new CellsByRow( container );

  layout.destroy();

  ok( !CellsByRow.data( container ), '.data() returns falsey' );

  function checkStyle( elem, property ) {
    ok( !elem.style[ property ], elem + ' has no ' + property + ' style' );
  }

  checkStyle( container, 'height' );
  checkStyle( container, 'position' );

  var items = container.querySelectorAll('.item');
  for ( var i=0, len = items.length; i < len; i++ ) {
    var itemElem = items[i];
    checkStyle( itemElem, 'position' );
    checkStyle( itemElem, 'left' );
    checkStyle( itemElem, 'top' );
  }

});
