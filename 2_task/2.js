$(document).ready(function () {
  let containerVisible = true;
  let dragging1 = false;
  let dragging2 = false;
  let startY1 = 0;
  let startY2 = 0;
  let startHeight1 = 0;
  let startHeight2 = 0;

  $(".arrow").click(function (event) {
    if ($(event.target).hasClass("arrow")) {
      $(".block-container:first-child").toggleClass("hide-container");
      $(".arrow").toggleClass("collapsed");
      $(".arrow").toggleClass("rotate180");
      containerVisible = !containerVisible;
    }
  });

  $(".slider1").mousedown(function (event) {
    dragging1 = true;
    startY1 = event.clientY;
    startHeight1 = $(".block1").height();
  });

  $(".slider2").mousedown(function (event) {
    dragging2 = true;
    startY2 = event.clientY;
    startHeight2 = $(".block3").height();
  });

  $(document).mousemove(function (event) {
    if (dragging1) {
      let deltaY1 = event.clientY - startY1;
      let newHeight1 = startHeight1 + deltaY1;
      newHeight1 = Math.max(newHeight1, 100);
      newHeight1 = Math.min(newHeight1, $(".block-container").height() - 100);
      $(".block1").css("height", newHeight1 + "px");
      $(".block2").css("height", `calc(100% - ${newHeight1}px)`);
    }

    if (dragging2) {
      let deltaY2 = startY2 - event.clientY;
      let newHeight2 = startHeight2 - deltaY2;
      newHeight2 = Math.max(newHeight2, 100);
      newHeight2 = Math.min(newHeight2, $(".block-container").height() - 100);
      $(".block3").css("height", newHeight2 + "px");
      $(".block4").css("height", `calc(100% - ${newHeight2}px)`);
    }
  });

  $(document).mouseup(function () {
    dragging1 = false;
    dragging2 = false;
  });
});
