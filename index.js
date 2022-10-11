$(document).ready(function(){
  $(".klik").click(function(){
      let id = $(this).prop('id');
      let split = id.split('_');
      let id_menu = split[1];

      $(".klik").removeClass('aktif');
      $("#klik_"+id_menu).addClass('aktif');

      $("#menu_").slideUp();

      $("#isi_2").slideUp();
      $("#isi_3").slideUp();
      $("#isi_4").slideUp();
      $("#isi_"+id_menu).slideToggle();
  });
});