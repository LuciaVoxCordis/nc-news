import { Link } from "react-router";

function Navigation() {
  return (
    <>
      <button>
        <Link className="link" to="/">
          Home
        </Link>
      </button>
      <button>
        <Link className="link" to="/Popular">
          Popular
        </Link>
      </button>
      <button>
        <Link className="link" to="/Recent">
          Recent
        </Link>
      </button>
      <button>
        <Link className="link" to="/Topics">
          Topics
        </Link>
      </button>
    </>
  );
}

export default Navigation;
