'use client'

import useAlertDialogStore from '@/store/alert-dialog-store'

import { Dialog, DialogContent } from '@/components/ui/dialog'

export function AlertDialogDemo() {
  const data = useAlertDialogStore(state => state.data)

  return (
    <Dialog
      open={Boolean(data.renderNode)}
      onOpenChange={open => {
        if (!open) useAlertDialogStore.getState().setData(null)
      }}
    >
      <DialogContent>
        {useAlertDialogStore.getState().data.renderNode}
      </DialogContent>
    </Dialog>
    // <AlertDialog open={Boolean(data.renderNode)}>
    //   {/* <AlertDialogTrigger asChild>
    //     <Button variant="outline">Show Dialog</Button>
    //   </AlertDialogTrigger> */}

    //   <AlertDialogContent>
    //     {useAlertDialogStore.getState().data.renderNode}
    //     <AlertCircleIcon className="h-6 w-6" />
    //     <AlertDialogCancel
    //       onClick={() => {
    //         useAlertDialogStore.getState().setData(null)
    //       }}
    //     >
    //       Cancel
    //     </AlertDialogCancel>
    //     {/* <AlertDialogHeader>
    //       <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    //       <AlertDialogDescription>Description</AlertDialogDescription>
    //     </AlertDialogHeader>
    //     <AlertDialogFooter>
    //       <AlertDialogCancel
    //         onClick={() => {
    //           useAlertDialogStore.getState().setData(null)
    //         }}
    //       >
    //         Cancel
    //       </AlertDialogCancel>
    //       <AlertDialogAction
    //         onClick={() => {
    //           useAlertDialogStore.getState().data.onSubmit()
    //           useAlertDialogStore.getState().setData(null)
    //         }}
    //       >
    //         Continue
    //       </AlertDialogAction>
    //     </AlertDialogFooter> */}
    //   </AlertDialogContent>
    // </AlertDialog>
  )
}
