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
        detail: 'ou até 10x de R$459,90 sem juros',
        payment: 'R$ 4.599,10- 10% de desconto em 1x no Cartão ou Boleto',
        photo: celular1,
        link: '/produtos/celular-iphone'
      },
      {
        title: 'Smartphone Samsung Galaxy S21 128GB Cinza 5G - 8GB RAM Tela 6,2” Câm. Tripla + Selfie 10MP',
        price: 'R$ 5.399,10',
        detail: 'ou até 10x de R$539,01 sem juros',
        payment: 'R$ 4.599,10- 10% de desconto em 1x no Cartão ou Boleto',
        photo: celular2,
        link: '/produtos/celular-samsung'
      },
      {
        title: 'Smartphone Xiaomi Redmi Note 9 128Gb ',
        price: 'R$ 1.509,99',
        detail: 'ou até 10x de R$150,99 sem juros',
        payment: 'R$ 1.358,10- 10% de desconto em 1x no Cartão ou Boleto',
        photo: celular3,
        link: '/produtos/celular-xiaomi'
      },
    ],
   [ 
     {
      title: 'Drone Multilaser Fenix GPS FPV Câmera FULL HD 1920P ',
      price: 'R$ 1.438,90',
      detail: 'ou até 10x de R$143,89 sem juros',
      payment: 'R$ 1.295,01- 10% de desconto em 1x no Cartão ou Boleto',
      photo: drone,
      link: '/produtos/drone'
    },
    {
      title: 'Teclado HyperX Alloy Core USB ABNT ',
      price: 'R$ 369,90',
      detail: 'ou até 10x de R$36,99 sem juros',
      payment: 'R$ 332,91- 10% de desconto em 1x no Cartão ou Boleto',
      photo: teclado,
      link: '/produtos/teclado'
    },
    {
      title: 'Headphone Basike Fone de Ouvido Bluetooth ',
      price: 'R$ 179,90',
      detail: 'ou até 10x de R$17,99 sem juros',
      payment: 'R$ 161,91 - 10% de desconto em 1x no Cartão ou Boleto',
      photo: headphone,
      link: '/produtos/headphone'
    },
  ],

  [
    {
    title: 'Notebook Dell Inspiron i15-3583-M3XP 8ª Geração Intel Core i5 ',
    price: 'R$ 4.177,15',
    detail: 'ou até 10x de R$417,70 sem juros',
    payment: 'R$ 3.759,43- 10% de desconto em 1x no Cartão ou Boleto',
    photo: notebook1,
    link: '/produtos/notebook-dell' 
  },
  {
    title: 'Notebook Positivo Intel Celeron 4GB 500GB',
    price: 'R$ 1.799,00',
    detail: 'ou até 10x de R$179,90 sem juros',
    payment: 'R$ 1.619,10- 10% de desconto em 1x no Cartão ou Boleto',
    photo: notebook2,
    link: '/produtos/notebook-positivo'
  },
  {
    title: 'Notebook Samsung Expert GfX X40 Intel Core i5, 8GB RAM ',
    price: 'R$ 3.799,00',
    detail: 'ou até 10x de R$379,90 sem juros',
    payment: 'R$ 3.419,10- 10% de desconto em 1x no Cartão ou Boleto',
    photo: notebook3,
    link: '/produtos/notebook-samsung'
  },
]
  ]
}