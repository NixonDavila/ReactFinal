import React from 'react';
import "../style/nosotros.css" // Asegúrate de crear un archivo CSS para estilos.
import Mapa from './mapa';
import HeaderP from './headerPrueba';

const AcercaDeNosotros = () => {
  return (
    <div className="acerca-de-nosotros">
        <HeaderP/>
      <h1>Acerca de Nosotros</h1>
      <p>
        En <strong>Un Mundo de Fantasía e Imaginación</strong>, nos especializamos en la creación de pasteles personalizados que hacen realidad tus sueños más dulces. Creemos que cada celebración merece un toque especial, y eso es exactamente lo que ofrecemos: queques tradicionales y locos que deleitarán a tus invitados.
      </p>
      <h2>Nuestros Productos</h2>
      <p>
        Ofrecemos una variedad de queques que se adaptan a todos los gustos:
      </p>
      <ul>
        <li><strong>Queques Tradicionales:</strong> A partir de 13,000 colones, elaborados con los mejores ingredientes para asegurar un sabor excepcional.</li>
        <li><strong>Queques Locos:</strong> Desde 20,000 colones, nuestros queques locos son personalizables según tu diseño y temática, perfectos para hacer de cualquier evento algo inolvidable.</li>
      </ul>
      <h2>¿Por Qué Elegirnos?</h2>
      <p>
        Nos apasiona hornear y crear. Cada pastel es una obra de arte, diseñada para reflejar tus deseos y hacer que tus celebraciones sean memorables. Con un enfoque en la calidad y la atención al detalle, garantizamos que cada bocado sea una experiencia deliciosa.
      </p>
      <p>
        ¡Déjanos ser parte de tus momentos más especiales y sorprenderte con un pastel único y delicioso!
      </p>
      <Mapa/>
    </div>
  );
};

export default AcercaDeNosotros;
