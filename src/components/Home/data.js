import drone from '../../images/drone.jpg'
import celular1 from '../../images/celular-iphone.jpg'
import celular2 from '../../images/celular-samsung.jpg'
import celular3 from '../../images/celular-xiaomi.jpg'
import notebook1 from '../../images/notebook-dell.jpg'
import notebook2 from '../../images/notebook-positivo.jpg'
import notebook3 from '../../images/notebook-samsung.jpg'
import teclado from '../../images/teclado.jpg'
import headphone from '../../images/headphone.jpg'

export const Data ={
  products: [
    [  
      {
        title: 'Smartphone Apple iPhone XS 64GB iOS Câmera Dupla',
        price: 'R$ 4.599,00',
        photo: celular1,
        link: '/produtos/celular-iphone'
      },
      {
        title: 'Smartphone Samsung Galaxy S21 128GB Cinza 5G - 8GB RAM Tela 6,2” Câm. Tripla + Selfie 10MP',
        price: 'R$ 5.399,10',
        photo: celular2,
        link: '/produtos/celular-samsung'
      },
      {
        title: 'Smartphone Xiaomi Redmi Note 9 128Gb ',
        price: 'R$ 1.509,99',
        photo: celular3,
        link: '/produtos/celular-xiaomi'
      },
    ],
   [ 
     {
      title: 'Drone Multilaser Fenix GPS FPV Câmera FULL HD 1920P ',
      price: 'R$ 1.438,90',
      photo: drone,
      link: '/produtos/drone'
    },
    {
      title: 'Teclado HyperX Alloy Core USB ABNT ',
      price: 'R$ 369,90',
      photo: teclado,
      link: '/produtos/teclado'
    },
    {
      title: 'Headphone Basike Fone de Ouvido Bluetooth ',
      price: 'R$ 179,90',
      photo: headphone,
      link: '/produtos/headphone'
    },
  ],

  [
    {
    title: 'Notebook Dell Inspiron i15-3583-M3XP 8ª Geração Intel Core i5 ',
    price: 'R$ 4.177,15',
    photo: notebook1,
    link: '/produtos/notebook-dell' 
  },
  {
    title: 'Notebook Positivo Intel Celeron 4GB 500GB',
    price: 'R$ 1.799,00',
    photo: notebook2,
    link: '/produtos/notebook-positivo"'
  },
  {
    title: 'Notebook Samsung Expert GfX X40 Intel Core i5, 8GB RAM ',
    price: 'R$ 3.799,00',
    photo: notebook3,
    link: '/produtos/notebook-samsung'
  },
]
  ]
}