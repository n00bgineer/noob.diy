import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const usePersistentStore = create(
    persist(
        (set) => ({
            isDarkMode: false,
            toggleDarkMode: () =>
                set((state) => ({ isDarkMode: !state.isDarkMode })),
        }),
        {
            name: 'noob-local-storage',
            getStorage: () => localStorage,
        }
    )
)
