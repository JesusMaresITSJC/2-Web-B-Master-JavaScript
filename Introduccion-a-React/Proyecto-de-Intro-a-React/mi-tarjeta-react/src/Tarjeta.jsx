function Tarjeta() {

  const nombre = "Jesus Mares";
  const profesion = "Desarrollador Web";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        width: '300px',
        textAlign: 'center',
        borderRadius: '10px',
        margin: '20px auto'
      }}
    >
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
  );
}

export default Tarjeta;