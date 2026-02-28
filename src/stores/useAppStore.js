import { create } from 'zustand';

const useAppStore = create((set) => ({
  sidebarCollapsed: false,
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: Boolean(collapsed) }),
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),

  openExpPointId: null,
  setOpenExpPointId: (pointId) => set({ openExpPointId: pointId }),
  resetOpenExpPointId: () => set({ openExpPointId: null }),
}));

export default useAppStore;
