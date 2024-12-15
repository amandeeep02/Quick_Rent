import { AuthProvider } from '@/context/AuthContext'
import { GadgetsProvider } from '@/context/GadgetContext'
import { Landing } from '@/pages/Landing'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <AuthProvider>
      <GadgetsProvider>
        <Routes>
          <Route path="*" element={<Landing />} />
        </Routes>
      </GadgetsProvider>
    </AuthProvider>
  )
}

export default AppRoutes
