import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/layout/Header';
import Spinner from './components/ui/Spinner';
import Router from './route/Router';
import { getAccessToken } from './services/localStorage';
import { initUser, login } from './stores/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getAccessToken()) {
      dispatch(initUser());
    }
  }, [getAccessToken()]);

  return (
    <>
      <Header />
      <div className="container max-w-xs pt-5">
        <Router />
      </div>
    </>
  );
}

export default App;
