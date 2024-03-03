import { useParams,  Outlet, Navigate } from 'react-router-dom';
import { VALID_POST_CATEGORIES } from 'utils/constants';

const PostGuard = () => {
  const { category } = useParams();
  if (!VALID_POST_CATEGORIES.includes(category)) {
    return <Navigate to="/error" replace />;
  }

  return <Outlet />;
};

export default PostGuard;
