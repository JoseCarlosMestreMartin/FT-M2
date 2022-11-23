var URL = "http://localhost:5000/amigos";

var mostrarAmigos = () => {
  //pedir la lista de amigos
  //
  $("#lista").empty();
  $.get(URL, (friends) => {
    for (let i = 0; i < friends.length; i++) {
      const e = friends[i];
      //apendearlo
      $("#lista").append(`<li>${e.name} X</li>`);
    }
  });
};

//agregar mostrarAmigos al evento click
$("#boton").click(mostrarAmigos);

//buscar un amigo con el id dado

let buscarUnAmigo = () => {
  let id = $("#input").val();
  if (id) {
    $.get(`${URL}/${id}`, (fr) => {
      $("#amigo").text(`un amigo: ${fr.name}`);
      $("#input").val("");
    });
  } else {
    $("#amigo").text(`Colocar un ID`);
  }
};

$("#search").click(buscarUnAmigo);

//eliminar un amigo
let eliminarUnAmigo = () => {
  id = $("#inputDelete").val();
  if (id) {
    $.ajax({
      url: `${URL}/${id}`,
      type: "DELETE",
      success: () => {
        $(success).text(`Se elimino correctamente`);
        $("#inputDelete").val("");
        mostrarAmigos();
      },
    });
  }
};

$("#delete").click(eliminarUnAmigo);
