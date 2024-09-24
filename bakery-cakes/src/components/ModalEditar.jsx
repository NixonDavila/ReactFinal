import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import putProducto from '../services/put';
import imageUpload64 from '../controller/base64';

export default function ModalEditar({ productoEditado, actualizarProducto }) {
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoPrice, setNuevoPrice] = useState("");
  const [nuevoSize, setNuevoSize] = useState("");
  const [nuevaImagen, setNuevaImagen] = useState(null);
  const [isChild, setIsChild] = useState(false);
  const [isGirl, setIsGirl] = useState(false);
  const [isMan, setIsMan] = useState(false);
  const [isWoman, setIsWoman] = useState(false);
  const [isGraduation, setIsGraduation] = useState(false);
  const [isForDad, setIsForDad] = useState(false);
  const [isForMom, setIsForMom] = useState(false);
  const [destacado, setDestacado] = useState(false); // Nuevo estado para destacar
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (productoEditado) {
      setNuevoNombre(productoEditado.name || "");
      setNuevoPrice(productoEditado.price || "");
      setNuevoSize(productoEditado.size || "");
      setNuevaImagen(productoEditado.image || null);
      setIsChild(productoEditado.tipo?.isChild || false);
      setIsGirl(productoEditado.tipo?.isGirl || false);
      setIsMan(productoEditado.tipo?.isMan || false);
      setIsWoman(productoEditado.tipo?.isWoman || false);
      setIsGraduation(productoEditado.tipo?.isGraduation || false);
      setIsForDad(productoEditado.tipo?.isForDad || false);
      setIsForMom(productoEditado.tipo?.isForMom || false);
      setDestacado(productoEditado.destacado || false); // Establecer estado destacado
      setShow(true);
    }
  }, [productoEditado]);

  const handleClose = () => setShow(false);

  const actualizarProductos = async (e) => {
    e.preventDefault();
    if (productoEditado && nuevoNombre.trim() !== "") {
      try {
        const productData = {
          name: nuevoNombre,
          price: nuevoPrice,
          size: nuevoSize,
          image: nuevaImagen || productoEditado.image,
          destacado, // Incluir la propiedad destacado
          tipo: {
            isChild,
            isGirl,
            isMan,
            isWoman,
            isGraduation,
            isForDad,
            isForMom,
          }
        };

        await putProducto(productData, productoEditado.id);
        actualizarProducto(productData);
        setShow(false);
      } catch (error) {
        console.error("Error al actualizar el producto:", error);
        alert("Hubo un problema al actualizar el producto");
      }
    }
  };

  const cancelarEdicion = () => {
    actualizarProducto(null);
    setShow(false);
  };

  const submitImagen = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64Image = await imageUpload64(file);
        setNuevaImagen(base64Image);
      } catch (error) {
        console.error("Error al convertir la imagen:", error);
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productoEditado && (
          <form onSubmit={actualizarProductos} className="producto-form">
            <div className="form-group">
              <label htmlFor="product-name">
                Nombre del Producto:
                <input
                  type="text"
                  id="product-name"
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  placeholder="Nuevo nombre del producto"
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="product-price">
                Precio:
                <input
                  type="number"
                  id="product-price"
                  value={nuevoPrice}
                  onChange={(e) => setNuevoPrice(e.target.value)}
                  placeholder="Nuevo precio del producto"
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="product-size">
                Tamaño:
                <input
                  type="text"
                  id="product-size"
                  value={nuevoSize}
                  onChange={(e) => setNuevoSize(e.target.value)}
                  placeholder="Nuevo tamaño del producto"
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
              <label htmlFor="destacado">
                <input
                  type="checkbox"
                  id="destacado"
                  name="destacado"
                  checked={destacado}
                  onChange={(e) => setDestacado(e.target.checked)}
                />
                Destacar Producto
              </label>
            </div>

            <div className="button-group">
              <Button type="submit" variant="primary">Actualizar Producto</Button>
              <Button type="button" variant="secondary" onClick={cancelarEdicion}>
                Cancelar
              </Button>
            </div>
          </form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}




