import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/product';




describe('ProductTitle', () => {
  test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper =renderer.create(
        <ProductTitle title='test product' className='prueba stilos' style={{background:"white"}} />
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('debe mostrar el componente con el nombre del producto', () => {
    const wrapper =renderer.create(
        <ProductCard product={product1}>
            {
                ()=>(<ProductTitle/>)
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  
});



 