import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface InpatientProps {
  name: string;
  nik: string;
  diagnosa: string;
  tanggalMasuk: string;
  pjDokter: string;
  room: string;
}

interface IInpatientStore {
  data: InpatientProps[];
  setData: (inPatient: InpatientProps) => void;
}

const useInpatient = create<IInpatientStore>()(
  persist(
    (set) => ({
      data: [], // Initialize 'open' with a default boolean value
      setData: (value: InpatientProps) =>
        set((state) => ({
          ...state,
          data: [...state.data, value],
        })),
    }),
    {
      name: "inpatient-storage",
    }
  )
);

export const useGetInpatient = () => useInpatient((state) => state.data);

export const useSetData = () => useInpatient((state) => state.setData);
