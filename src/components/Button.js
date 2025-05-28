import { Link } from 'react-router-dom';
import './Button.css';

function Button({ to, onClick, children, variant = 'primary', type = 'button' }) {
  if (to) {
    return (
      <Link to={to} className={`custom-btn ${variant}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`custom-btn ${variant}`} type={type}>
      {children}
    </button>
  );
}

export default Button;