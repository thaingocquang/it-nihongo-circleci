'use strict';

const role = require('./../constant/roles')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
        'Stores',
        [
          {
            name: 'Bún đậu mắm tôm Gia Di',
              address: '126B Đường 2 Tháng 9, Q. Hải Châu, TP. Đà Nẵng',
              user_id: role.STORE_OWNER
          },
            {
                name: 'Bún Đậu 36',
                address: '36 Ngô Văn Sở, TP. Đà Nẵng',
                user_id: role.STORE_OWNER
            },
            {
                name: 'Ẩm thực Gánh - Bún đậu mắm tôm',
                address: '157 Châu Thị Vĩnh Tế, TP. Đà Nẵng',
                user_id: role.STORE_OWNER
            },
        ],
        {},
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Stores', null, {})
  }
};
