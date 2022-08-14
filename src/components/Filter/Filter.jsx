import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Filtr by name:
      <input type="text" name="name" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
