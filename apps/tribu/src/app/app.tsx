import { DashboardNotFound, Layout, PageTransition } from '@tribu/ui';
import { Home } from '@tribu/home';
import { SurveyHome, SurveyTemplates } from '@tribu/surveys';
import { AudienceHome, NewAudienceGroup } from '@tribu/audience';
import FormBuilder from './form_builder_screen';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
export function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // navigate('/dashboard');
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomeInt />} />
      <Route path="surveys/templates" element={<SurveyTemplates />} />
      <Route path="dashboard" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="surveys" element={<SurveyHome />} />
        <Route path="surveys/new" element={<FormBuilder />} />
        <Route path="audience" element={<AudienceHome />} />
        <Route path="audience/groups/new" element={<NewAudienceGroup />} />
        <Route path="*" element={<DashboardNotFound />} />
      </Route>
      <Route path="*" element={<DashboardNotFound />} />
    </Routes>
  );
}

const HomeInt = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/dashboard');
  }, []);

  return <></>;
};

export default App;
