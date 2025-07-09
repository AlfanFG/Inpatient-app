import { DataTable } from "@/components/table";
import { columns } from "@/feature/inpatient/list-inpatient/column";
import useLoading from "@/hooks/useLoading";
import { useGetInpatient, type InpatientProps } from "@/stores/inpatientStore";
import { useEffect, useState } from "react";

export default function ListInpatient() {
  const [data, setData] = useState<InpatientProps[]>([]);
  const { showLoading, loading, hideLoading } = useLoading();
  const dataInpatient = useGetInpatient();

  async function getDataInpatient(): Promise<InpatientProps[]> {
    // Fetch data from your API here.
    return new Promise<InpatientProps[]>((resolve) => {
      setTimeout(() => resolve(dataInpatient), 500);
    });
  }

  useEffect(() => {
    showLoading();
    getDataInpatient().then((res) => {
      hideLoading();
      setData(res);
    });
  }, []);

  return (
    <div className="space-y-4">
      <p className="text-xl">List Inpatient</p>

      <DataTable loading={loading} columns={columns} data={data} />
    </div>
  );
}
