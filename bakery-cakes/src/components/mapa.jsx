const Mapa = () => {
    return (

        <div className="mapaCont">
            <div><h1>NUESTRA UBICACIÓN</h1></div>
            <iframe
               src="https://www.google.com/maps/embed/v1/place?q=puntarenas&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                width="600"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"

            ></iframe>
        </div>
    )
}
export default Mapa
