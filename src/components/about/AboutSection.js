import React from 'react';
import { StyledArticle } from './AboutSection.styled';
import Image from 'next/image';
import GoobsImage from '../../images/Goobs.JPG'

const AboutSection = () => {
  return (
    <StyledArticle>
      <div>
      <Image
        className='goobsImage'
        src={GoobsImage}
          alt="Goobs Image"
          width={250}
          height={450}
      />

      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illo,
        aspernatur harum sunt dicta, unde voluptatem est eius corporis animi
        necessitatibus ea beatae iure veniam amet ipsum eveniet doloribus
        incidunt reprehenderit numquam? Minus iure dolores quasi, ipsum quidem
        adipisci, fuga, dolor doloribus maxime illo ipsa ex rerum iusto magni
        neque at quisquam consequuntur. Inventore vitae incidunt officia
        perferendis amet? Ipsam voluptatem iure corrupti maxime minima adipisci.
        Natus eveniet odio deserunt! Quos fugiat illo saepe beatae, alias, sequi
        a sunt sed necessitatibus eius iure aliquid nobis! Quasi, minima
        perspiciatis a molestiae animi aperiam sunt, magnam corporis atque
        veniam excepturi labore eaque?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum
        nulla accusantium perferendis quam explicabo odit quisquam ea natus?
        Saepe ducimus, minima error alias dolorum consectetur officia architecto
        voluptatem iure sunt eveniet nam, recusandae explicabo, itaque vel
        autem. Accusamus suscipit sit labore sed blanditiis a est rem harum
        expedita veritatis numquam voluptatibus dolore voluptatum sunt
        repellendus explicabo, excepturi beatae perferendis. Numquam dicta quis
        ipsum explicabo suscipit alias placeat, ea, vero minus ducimus
        voluptatibus iste repellendus deleniti? Eos, quas! Voluptatem tempora
        explicabo, corrupti dolor hic iure quo, ipsum voluptates quaerat omnis
        accusamus et vel, necessitatibus doloribus optio. Odio nobis ad
        molestias.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio qui
        consequuntur aut. Nobis debitis ipsum soluta sit itaque officiis impedit
        maiores suscipit magni id harum consequuntur quas delectus culpa, saepe
        nostrum, autem ullam! Assumenda molestiae reprehenderit sunt ducimus id
        saepe porro vitae asperiores eum accusantium? Illum aliquid excepturi
        magni quos.
      </p>
    </StyledArticle>
  );
};

export default AboutSection;
