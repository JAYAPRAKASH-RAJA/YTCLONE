import { useEffect } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShorts } from '../Store/ShortsSlice';
import { RootState } from '../Store/Index';


export const useFetchShorts = () => {
  const dispatch = useDispatch();
  const { videos, status, error } = useSelector((state: RootState) => state.shorts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchShorts());
    }
  }, [status, dispatch]);

  return { videos, status, error };
};
