import React from 'react';
import PropTypes from 'prop-types';

const User = ({ postAuthor }) => (
  <section className="author__info">
    <h2 className="author__name">
      Author name:
      {' '}
      {
        postAuthor.name
      }
    </h2>
    <h2 className="author__email">
      Author email:
      {' '}
      {
        postAuthor.email
      }
    </h2>
    <section className="author__address">
      Author address:
      {' '}
      street
      {' '}
      -
      {' '}
      {
        postAuthor.address.street
      }
      ;
      suite
      {' '}
      -
      {' '}
      {
        postAuthor.address.suite
      }
      ;
      city
      {' '}
      -
      {' '}
      {
        postAuthor.address.city
      }
      ;
    </section>
  </section>
);

User.propTypes = { postAuthor: PropTypes.objectOf(PropTypes.any) };

User.defaultProps = { postAuthor: {} };

export default User;
