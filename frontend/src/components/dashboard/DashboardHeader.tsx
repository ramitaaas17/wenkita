// components/dashboard/DashboardHeader.tsx
'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function DashboardHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '¡Buenos días';
    if (hour < 18) return '¡Buenas tardes';
    return '¡Buenas noches';
  };

  return (
    <div className="relative overflow-hidden bg-linear-to-br from-blue-600 via-purple-600 to-cyan-500 text-white">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fadeIn">
              {getGreeting()}, {user?.nombre}! 
            </h1>
            <p className="text-blue-50 text-lg font-light">
              Tu salud es nuestra prioridad
            </p>
          </div>
          
          <button
            onClick={handleLogout}
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl transition-all duration-300 flex items-center gap-3 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 group-hover:rotate-12 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>

        {/* Stats Cards - More modern design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-3xl"></div>
            <div className="relative flex items-start justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-blue-50 text-sm font-medium uppercase tracking-wide">Próxima Cita</p>
                </div>
                <p className="text-4xl font-bold">Hoy</p>
                <p className="text-blue-100 text-sm">A las 10:00 AM</p>
              </div>
              <div className="bg-white/20 p-4 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-3xl"></div>
            <div className="relative flex items-start justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <p className="text-blue-50 text-sm font-medium uppercase tracking-wide">Pendientes</p>
                </div>
                <p className="text-4xl font-bold">0</p>
                <p className="text-blue-100 text-sm">Citas por confirmar</p>
              </div>
              <div className="bg-white/20 p-4 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-3xl"></div>
            <div className="relative flex items-start justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <p className="text-blue-50 text-sm font-medium uppercase tracking-wide">Historial</p>
                </div>
                <p className="text-4xl font-bold">0</p>
                <p className="text-blue-100 text-sm">Consultas realizadas</p>
              </div>
              <div className="bg-white/20 p-4 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}