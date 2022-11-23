var URL = "http://localhost:5000/amigos";

let showFriends = () => {
  $("#lista").empty();
  $.get(`${URL}`, (friends) => {
    friends.forEach((e) => {
      $("#lista").append(`<li id="${e.id}">${e.name} X</li>`);
    });
  });
};

$("#boton").click(showFriends);

$("#search").click(() => {
  let id = $("#input").val();
  if (id) {
    $.get(`${URL}/${id}`, (fr) => {
      $("#amigo").text(
        `Ess ${fr.name} que tiene ${fr.age} y te podes comunicar en ${fr.email}`
      );
      $("#input").val("");
    });
  } else {
    $("#amigo").text("Debes colocar un id");
  }
});

let deleteFr = () => {
  let id = $("#inputDelete").val();
  if (id) {
    $.ajax({
      url: `${URL}/${id}`,
      type: "DELETE",
      success: () => {
        $("#success").text(`Eliminado correctamente`);
        $("#input").value = 0;
        showFriends();
      },
    });
  } else {
    $("#success").text(`Debes ingresar un texto`);
  }
};
$("#delete").click(deleteFr);
