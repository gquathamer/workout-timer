import { React } from 'react';
import PropTypes from 'prop-types';

export default function Input({ updateSeconds }) {
  return (
    <select onChange={e => updateSeconds(e.target.value)}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
  );
}

Input.propTypes = {
  updateSeconds: PropTypes.function,
};
