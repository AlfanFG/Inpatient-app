import InputText from "../../../components/inputs/InputText";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../../../components/ui/button";
import { DatePicker } from "@/components/inputs/DatePicker";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSetData } from "@/stores/inpatientStore";
import useLoading from "@/hooks/useLoading";
import { toast } from "sonner";
import { Check, Loader } from "lucide-react";

interface IFormInput {
  name: string;
  nik: string;
  diagnosa: string;
  tanggalMasuk: string;
  pjDokter: string;
  room: string;
}

const formSchema = z.object({
  name: z.string().min(1, { message: "Nama pasien harus diisi" }),
  nik: z.string().regex(/^\d{16}$/, {
    message: "NIK Harus diisi 16 digit",
  }),
  diagnosa: z.string().min(1, { message: "Diagnosa harus diisi" }),
  tanggalMasuk: z.string({ message: "Tanggal masuk harus diisi" }),
  pjDokter: z
    .string()
    .min(1, { message: "Penanggung jawab dokter harus diisi" }),
  room: z.string().min(1, { message: "Ruangan harus diisi" }),
});

export default function FormInpatient() {
  const { loading, hideLoading, showLoading } = useLoading();
  const { register, control, handleSubmit, formState, reset } =
    useForm<IFormInput>({
      resolver: zodResolver(formSchema),
    });
  const setInpatient = useSetData();

  const { errors } = formState;
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    showLoading();
    setTimeout(() => {
      hideLoading();
      setInpatient(data);
      toast(
        <div className="flex gap-2">
          <Check className="text-green-500" />
          Data has been added
        </div>
      );
    }, 500);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-7xl flex flex-col gap-4"
    >
      <InputText
        error={errors.name?.message}
        placeholder="John Doe"
        label="Nama"
        {...register("name")}
      />
      <InputText
        placeholder="3121XXXX"
        error={errors.nik?.message}
        label="NIK"
        {...register("nik")}
      />
      <InputText
        placeholder="ex:Demam"
        label="Diagnosa"
        error={errors.diagnosa?.message}
        {...register("diagnosa")}
      />
      <DatePicker
        control={control}
        label="Tanggal Masuk"
        error={errors.tanggalMasuk?.message}
        {...register("tanggalMasuk")}
      />

      <InputText
        placeholder="Masukan dokter penanggung jawab"
        label="Dokter Penanggung Jawab"
        error={errors.pjDokter?.message}
        {...register("pjDokter")}
      />
      <InputText
        placeholder="Masukan nomor ruangan"
        label="Room"
        error={errors.room?.message}
        {...register("room")}
      />
      <Button disabled={loading} type="submit">
        {loading ? <Loader /> : "Submit"}
      </Button>
    </form>
  );
}
