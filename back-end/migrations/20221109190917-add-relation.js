'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // user - role
    await queryInterface.addConstraint('Users', {
      fields: ['role_id'],
      type: 'foreign key',
      name: 'fk_user_role',
      references: {
        table: 'Roles',
        field: 'id'
      },
    });

    // userInfo - user
    await queryInterface.addConstraint('UserInfos', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_userInfo_user',
      references: {
        table: 'Users',
        field: 'id'
      },
    });

    // post - user
    await queryInterface.addConstraint('Posts', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_post_user',
      references: {
        table: 'Users',
        field: 'id'
      },
    });

    // store - user
    await queryInterface.addConstraint('Stores', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_store_user',
      references: {
        table: 'Users',
        field: 'id'
      },
    });

    // like - user
    await queryInterface.addConstraint('Likes', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_like_user',
      references: {
        table: 'Users',
        field: 'id'
      },
    });

    // like - post
    await queryInterface.addConstraint('Likes', {
      fields: ['post_id'],
      type: 'foreign key',
      name: 'fk_like_post',
      references: {
        table: 'Posts',
        field: 'id'
      },
    });

    // comment - user
    await queryInterface.addConstraint('Comments', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_comment_user',
      references: {
        table: 'Users',
        field: 'id'
      },
    });

    // comment - post
    await queryInterface.addConstraint('Comments', {
      fields: ['post_id'],
      type: 'foreign key',
      name: 'fk_comment_post',
      references: {
        table: 'Posts',
        field: 'id'
      },
    })

    // post - store
    await queryInterface.addConstraint('Posts', {
      fields: ['store_id'],
      type: 'foreign key',
      name: 'fk_post_store',
      references: {
        table: 'Stores',
        field: 'id'
      },
    });

    // rate - user
    await queryInterface.addConstraint('Rates', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_rate_user',
      references: {
        table: 'Users',
        field: 'id'
      },
    });

    // rate - store
    await queryInterface.addConstraint('Rates', {
      fields: ['store_id'],
      type: 'foreign key',
      name: 'fk_rate_store',
      references: {
        table: 'Stores',
        field: 'id'
      },
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
