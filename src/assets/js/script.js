
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("fixed-top")
    } else {
      $(".navbar").removeClass("fixed-top")
    }
  });

  // Active Link
  $(".nav-item").on("click", function() {
    $(".nav-item ").removeClass("active");
    $(this).addClass("active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0
      },

      1000
    );
    return false;
  });

// $('input[type="file"]').each(function(){

//   var $file = $(this),
//       $label = $file.next('label'),
//       $labelText = $label.find('span'),
//       labelDefault = $labelText.text();

//   $file.on('change', function (event) {
//     console.log("upload");
//     var fileName = $file.val().split('\\' ).pop(),
//         tmppath = URL.createObjectURL(event.target.files[0]);
//     if( fileName ){
//       $label
//         .addClass('file-ok')
//         .css('background-image','url(' + tmppath +')');
//       $labelText.text(fileName);
//     }else{
//       $label.removeClass('file-ok');
//       $labelText.text(labelDefault);
//     }
//   });

// });


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('#upload-img').attr('src', e.target.result);
          $('#upload-img').on('load', function () {
            $('.delete-img').css('display', 'block');
          });
          $('.delete-img').on('click', function () {
            $('#upload-img').removeAttr('src');
            $('.delete-img').css('display', 'none');
          });
        };

        reader.readAsDataURL(input.files[0]);
    }
}




