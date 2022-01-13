import 'assets/styles/global.scss';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import ForgotPassword from 'features/auth/pages/ForgotPassword';
import LoginPage from 'features/auth/pages/LoginPage';
import { HomePage } from 'pages/Home';
import { ExamBankPage } from 'pages/ExamBank';
import { NotificationPage } from 'pages/Notification';
import { PrivateFilePage } from 'pages/PrivateFile';
import { SubjectListPage } from 'pages/SubjectManagement';
import { SupportPage } from 'pages/Support';
import { SystemPage } from 'pages/System';
import { Route, Routes } from 'react-router-dom';
import { Profile } from 'pages/Profile';
import { SubjectDetail } from 'pages/SubjectManagement/pages/SubjectDetail';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
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
        <Route path="home" element={<HomePage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="subjectmanagement/subject-list" element={<SubjectListPage />} />
        <Route path="subject-list/:slug" element={<SubjectDetail />} />
        <Route path="privatefile/all-private-file" element={<PrivateFilePage />} />
        <Route path="exambank" element={<ExamBankPage />} />
        <Route path="notify" element={<NotificationPage />} />
        <Route path="system" element={<SystemPage />} />
        <Route path="support" element={<SupportPage />} />
      </Route>
    </Routes>
  );
}

export default App;
