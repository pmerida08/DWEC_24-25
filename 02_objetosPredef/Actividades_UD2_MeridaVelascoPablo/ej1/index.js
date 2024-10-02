document.addEventListener("DOMContentLoaded", function () {
  let fecha = document.getElementById("fecha").value;
  fecha = new Date();
  const input = document.getElementById("mostrarFecha");

  input.addEventListener("click", () => {
    const f = new Date(fecha);
    let resultado = document.getElementById("resultado");

    resultado.textContent =
      `Hoy: ${f.toLocaleDateString()}\n\n` +
      `En 30 días será: ${new Date(
        f.getTime() + 30 * 24 * 60 * 60 * 1000
      ).toLocaleDateString()}\n\n` +
      `En 60 días será: ${new Date(
        f.getTime() + 60 * 24 * 60 * 60 * 1000
      ).toLocaleDateString()}\n\n` +
      `En 90 días será: ${new Date(
        f.getTime() + 90 * 24 * 60 * 60 * 1000
      ).toLocaleDateString()}\n\n`;
  });
});
