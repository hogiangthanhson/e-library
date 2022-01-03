import 'assets/styles/global.scss';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import ForgotPassword from 'features/auth/pages/ForgotPassword';
import LoginPage from 'features/auth/pages/LoginPage';
import { HomePage } from 'pages/Home';
import { ExamBankPage } from 'pages/ExamBank';
import { NotificationPage } from 'pages/Notification';
import { PrivateFilePage } from 'pages/PrivateFile';
import { SubjectManagementPage } from 'pages/SubjectManagement';
import { SupportPage } from 'pages/Support';
import { SystemPage } from 'pages/System';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="subjectmanagement" element={<SubjectManagementPage />} />
        <Route path="privatefile" element={<PrivateFilePage />} />
        <Route path="exambank" element={<ExamBankPage />} />
        <Route path="notify" element={<NotificationPage />} />
        <Route path="system" element={<SystemPage />} />
        <Route path="support" element={<SupportPage />} />
      </Route>
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default App;
