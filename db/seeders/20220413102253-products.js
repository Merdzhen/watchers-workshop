module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Products', [
      {
        title: 'Модель №1',
        description: 'Описание модели',
        img: '/img/example1.png',
        price: 4000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Модель №2',
        description: 'Описание модели',
        img: '/img/example2.png',
        price: 7000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Модель №3',
        description: 'Описание модели',
        img: '/img/example3.png',
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Модель №4',
        description: 'Описание модели',
        img: '/img/example4.png',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Products');
  },
};
