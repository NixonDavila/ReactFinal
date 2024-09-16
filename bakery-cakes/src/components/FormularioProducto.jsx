import React, { useState } from 'react';
import '../style/formProducto.css'; // Asegúrate de que la ruta sea correcta
import postProduct from '../services/postProduct'; // Ajusta la ruta según la ubicación del archivo
import imageUpload64 from '../controller/base64'; // Asegúrate de que la ruta sea correcta

const FormularioProducto = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState(null);
  const [isChild, setIsChild] = useState(false);
  const [isGirl, setIsGirl] = useState(false);
  const [isMan, setIsMan] = useState(false);
  const [isWoman, setIsWoman] = useState(false);
  const [isGraduation, setIsGraduation] = useState(false);
  const [isForDad, setIsForDad] = useState(false);
  const [isForMom, setIsForMom] = useState(false);

  const submitImagen = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        // Convierte la imagen a base64
        const base64Image = await imageUpload64(file);
        console.log("Imagen en base64:", base64Image);

        // Actualiza el estado de imagen con la cadena base64
        setImage(base64Image);
      } catch (error) {
        console.error("Error al convertir la imagen:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      price,
      size,
      image, // Incluye la imagen en base64
      tipo: {
        isChild,
        isGirl,
        isMan,
        isWoman,
        isGraduation,
        isForDad,
        isForMom,
      },
    };

    try {
      // Enviar los datos del producto
      await postProduct(productData);

      alert("El producto se ha agregado exitosamente");

      // Limpiar los campos del formulario
      setName("");
      setPrice("");
      setSize("");
      setImage(null);
      setIsChild(false);
      setIsGirl(false);
      setIsMan(false);
      setIsWoman(false);
      setIsGraduation(false);
      setIsForDad(false);
      setIsForMom(false);
    } catch (error) {
      console.error("Error al agregar el producto", error);
      alert("Hubo un problema con el registro del producto");
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="product-name">
          Nombre del Producto:
          <input
            id="product-name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese el nombre del producto"
            required
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="product-price">
          Precio:
          <input
            id="product-price"
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Ingrese el precio del producto"
            required
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="product-size">
          Tamaño:
          <input
            id="product-size"
            type="text"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="Ingrese el tamaño del producto"
            required
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="product-image">
          Imagen del Producto:
          <input
            id="product-image"
            type="file"
            name="image"
            accept="image/*"
            onChange={submitImagen}
          />
        </label>
      </div>

      <div className="form-group">
        <h3>Especificaciones del Producto:</h3>
        <div className="checkbox-group">
          <label htmlFor="isChild">
            <input
              type="checkbox"
              id="isChild"
              name="isChild"
              checked={isChild}
              onChange={(e) => setIsChild(e.target.checked)}
            />
            Niño
          </label>
          <label htmlFor="isGirl">
            <input
              type="checkbox"
              id="isGirl"
              name="isGirl"
              checked={isGirl}
              onChange={(e) => setIsGirl(e.target.checked)}
            />
            Niña
          </label>
          <label htmlFor="isMan">
            <input
              type="checkbox"
              id="isMan"
              name="isMan"
              checked={isMan}
              onChange={(e) => setIsMan(e.target.checked)}
            />
            Hombre
          </label>
          <label htmlFor="isWoman">
            <input
              type="checkbox"
              id="isWoman"
              name="isWoman"
              checked={isWoman}
              onChange={(e) => setIsWoman(e.target.checked)}
            />
            Mujer
          </label>
          <label htmlFor="isGraduation">
            <input
              type="checkbox"
              id="isGraduation"
              name="isGraduation"
              checked={isGraduation}
              onChange={(e) => setIsGraduation(e.target.checked)}
            />
            Graduación
          </label>
          <label htmlFor="isForDad">
            <input
              type="checkbox"
              id="isForDad"
              name="isForDad"
              checked={isForDad}
              onChange={(e) => setIsForDad(e.target.checked)}
            />
            Para Papá
          </label>
          <label htmlFor="isForMom">
            <input
              type="checkbox"
              id="isForMom"
              name="isForMom"
              checked={isForMom}
              onChange={(e) => setIsForMom(e.target.checked)}
            />
            Para Mamá
          </label>
        </div>
      </div>

      <div className="form-group">
        <button type="submit">Agregar Producto</button>
      </div>
    </form>
  );
};

export default FormularioProducto;



