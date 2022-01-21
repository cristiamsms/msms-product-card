import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';

import { product2 } from '../data/product';




describe('ProductImage', () => {
    
  test('debe de mostrar el componente correctamente con el url de la imagen', () => {
    const wrapper =renderer.create(
        <ProductImage img='https:prueba' className='prueba stilos' style={{background:"white"}} />
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  
  test('debe mostrar el componente con el imagen del producto', () => {
    const wrapper =renderer.create(
        <ProductCard product={product2}>
            {
                ()=>(<ProductImage/>)
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  
  
});

