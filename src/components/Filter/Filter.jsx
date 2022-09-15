import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.filter}>
      <h1 className={s.title}>CONTACTS:</h1>
      <label className={s.label}>
        FILTER BY NAME:
        <input
          type="text"
          name="name"
          value={value}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
