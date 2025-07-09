"use client";

import { DataTableColumnHeader } from "@/components/table/ColumnHeader";
import type { InpatientProps } from "@/stores/inpatientStore";
import { type ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<InpatientProps>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    id: "nik",
    accessorKey: "nik",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="NIK" />
    ),
  },
  {
    id: "diagnosa",
    accessorKey: "diagnosa",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Diagnosa" />
    ),
  },
  {
    id: "pjDokter",
    accessorKey: "pjDokter",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dokter" />
    ),
  },
  {
    id: "tanggalMasuk",
    accessorKey: "tanggalMasuk",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tanggal Masuk" />
    ),
  },
  {
    id: "room",
    accessorKey: "room",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Room" />
    ),
  },
];
