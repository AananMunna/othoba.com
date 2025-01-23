import 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();

  // Split the path into an array of segments
  const pathSegments = location.pathname.split('/').filter((segment) => segment);

  return (
    <nav className="bg-gray-100 py-3 px-4 rounded-lg shadow-md">
      <ul className="flex items-center space-x-2 text-gray-600">
        {/* Home Link */}
        <li>
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
        </li>

        {/* Dynamic Path Segments */}
        {pathSegments.map((segment, index) => {
          // Generate path for each segment
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          // Capitalize segment for display
          const label = segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={path} className="flex items-center">
              <span className="mx-2">/</span>
              {index === pathSegments.length - 1 ? (
                <span className="text-gray-800 font-bold">{label}</span>
              ) : (
                <Link to={path} className="hover:text-indigo-600">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
