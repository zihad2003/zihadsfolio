import { create } from 'zustand';

export const useNexusStore = create((set) => ({
  mode: 'intro',
  scroll: 0,
  scrollProgress: 0,
  activeCourse: null,
  focusedCourse: null,

  setScroll: (value) =>
    set({ scroll: value, scrollProgress: value }),

  setActiveCourse: (course) =>
    set({ activeCourse: course, mode: 'study' }),
  openCourse: (course) =>
    set({ activeCourse: course, mode: 'study' }),
  closeCourse: () =>
    set({ activeCourse: null, mode: 'atrium' }),

  setFocused: (course) =>
    set({ focusedCourse: course }),
  clearFocus: () =>
    set({ focusedCourse: null }),

  startJourney: () =>
    set({ mode: 'atrium' }),
}));

export const useStore = useNexusStore;
