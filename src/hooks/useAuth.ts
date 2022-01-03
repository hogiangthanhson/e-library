import { useAppSelector } from 'app/hooks';

export default function useAuth() {
  const { email, token, id } = useAppSelector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}