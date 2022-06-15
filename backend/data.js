import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'QuangQuy',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Luyen',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Computer Case',
      slug: 'computer-case',
      category: 'Cases',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Gigabite',
      rating: 4.5,
      numReviews: 10,
      description: 'pc case work well',
    },
    {
      // _id: '2',
      name: 'Auraton Case',
      slug: 'auraton-case',
      category: 'Cases',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'SaigonBuffaloes',
      rating: 4.0,
      numReviews: 10,
      description: 'pc case work well',
    },
    {
      // _id: '3',
      name: 'Auraton Case',
      slug: 'auraton-case',
      category: 'Cases',
      image: '/images/p3.jpg',
      price: 250,
      countInStock: 10,
      brand: 'SaigonBuffaloes',
      rating: 4.0,
      numReviews: 10,
      description: 'Good products',
    },
    {
      // _id: '4',
      name: 'Auraton Case',
      slug: 'auraton-case',
      category: 'Cases',
      image: '/images/p4.jpg',
      price: 250,
      countInStock: 10,
      brand: 'Gigabite',
      rating: 4.0,
      numReviews: 10,
      description: 'Good products',
    },
    
   
  ],
};
export default data;
