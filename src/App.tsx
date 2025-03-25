import './App.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import { createTheme, MantineProvider, Divider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyProfilePage from './Pages/CompanyProfilePage';
import PostedJobsPage from './Pages/PostedJobsPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUpPage from './Pages/SignUpPage';
import ProfilePage from './Pages/ProfilePage';


function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: "poppins, sans-serif",
    primaryColor: "bright-sun",
    primaryShade: 4,
    colors: {
      'mine-shaft': ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d'],
      'bright-sun': ['#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902']
    },

  })
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
        <div className='relative'>
          <Header />
          <Divider size="xs" />
            <Routes>
              <Route path='/find-jobs' element={<FindJobs />} />
              <Route path='/find-talent' element={<FindTalentPage />} />
              <Route path='/jobs' element={<JobDescPage />} />
              <Route path='/apply-job' element={<ApplyJobPage />} />
              <Route path='/post-jobs' element={<PostJobPage />} />
              <Route path='/posted-jobs' element={<PostedJobsPage />} />
              <Route path='/company' element={<CompanyProfilePage/>}/>
              <Route path='/job-history' element={<JobHistoryPage/>}/>
              <Route path='/login' element={<SignUpPage/>}/>
              <Route path='/signup' element={<SignUpPage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/talent-profile' element={<TalentProfilePage />} />
              <Route path='*' element={<HomePage />} />
            </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
