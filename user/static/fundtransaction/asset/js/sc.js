$(document).ready(function() {

  $(".table-basic").freezeTable();
  
  
  $(".table-columns-only").freezeTable({
  'freezeHead': false,
});

	$(".table-basic").freezeTable({
    'freezeColumn': false,
  });



  $(".table-scrollable").freezeTable({
    'scrollable': true,
  });

  $('#table-modal').one('shown.bs.modal', function (e) {

    $(this).find(".table-modal").freezeTable({
      'container': '#table-modal.modal',
    });
  });

  $(".table-columns-only").freezeTable({
    'freezeHead': true,
  });

  $(".table-head-only").freezeTable({
    'freezeColumn': true,
  });

  // 2 Columns to be fixed
  $(".table-multi-columns").freezeTable({
    'columnNum' : 2,
  });

  // Shadow enabled
  $(".table-shadow").freezeTable({
    'shadow' : true,
  });

  // Customized styles
  $(".table-wrap-styles").freezeTable({
    'headWrapStyles': {'box-shadow': '0px 9px 10px -5px rgba(159, 159, 160, 0.8)'},
  });

  $(".table-with-scrollbar").freezeTable({
    'scrollBar': false,
  });
  



});