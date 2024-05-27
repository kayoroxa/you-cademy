'use client'
import useAlertDialogStore from '@/store/alert-dialog-store'
import { Video } from '@prisma/client'
import { Row } from '@tanstack/react-table'
import * as z from 'zod'
import AutoForm, { AutoFormSubmit } from '../ui/auto-form'

// Define your form schema using zod

export function getCourseZodSchema(row?: Row<Video>) {
  const formSchema = z.object({
    title: z
      .string({
        required_error: 'Password is required.',
      })
      // Use the "describe" method to set the label
      // If no label is set, the field name will be used
      // and un-camel-cased
      .describe('Titulo do vídeo')
      .default(row?.getValue('title') || ''),

    youtubeId: z

      .string({
        required_error: 'Password is required.',
      })
      .describe('Youtube ID')
      .length(11, { message: 'O ID tem que ter 11 caracteres' })
      .default(row?.getValue('youtubeId') || ''),
  })

  return formSchema
}

export default function CourseForm({ row }: { row: Row<Video> }) {
  console.log(row.getValue('id'))
  const formSchema = getCourseZodSchema(row)

  return (
    <AutoForm
      onSubmit={(data: z.infer<typeof formSchema>) => {
        useAlertDialogStore
          .getState()
          .data.onSubmit({ ...data, id: Number(row.getValue('id')) })

        useAlertDialogStore.getState().setData(null)
      }}
      // Pass the schema to the form
      formSchema={formSchema}
      // You can add additional config for each field
      // to customize the UI
      fieldConfig={{
        youtubeId: {
          // Set a "description" that will be shown below the field
          description: 'Pegue o id do seu video. Sem a url',
        },
      }}
    >
      {/* 
      Pass in a AutoFormSubmit or a button with type="submit".
      Alternatively, you can not pass a submit button
      to create auto-saving forms etc.
      */}
      <AutoFormSubmit>Send now</AutoFormSubmit>
    </AutoForm>
  )
}
