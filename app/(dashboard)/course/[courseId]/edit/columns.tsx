'use client'

import { Video } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import EditButton from './edit-button'

function HandleEdit() {}

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = Video

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'id',
  },
  {
    accessorKey: 'title',
    header: 'title',
  },
  {
    accessorKey: 'youtubeId',
    header: 'youtubeId',
  },

  // {
  //   accessorKey: 'amount',
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue('amount'))
  //     const formatted = new Intl.NumberFormat('en-US', {
  //       style: 'currency',
  //       currency: 'USD',
  //     }).format(amount)

  //     return <div className="text-right font-medium">{formatted}</div>
  //   },
  // },
  {
    id: 'select',
    header: () => <div className="text-center">select</div>,
    cell: ({ row }) => <EditButton row={row} />,
  },
]
