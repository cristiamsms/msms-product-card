# MSMS-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Cristian Martinez

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'msms-product-card';
```

```
<ProductCard 
    product={ product }
    initialValues={{
        count: ,
        maxCount: 10,
    }}
>
    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```