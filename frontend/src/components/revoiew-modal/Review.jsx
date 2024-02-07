import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'

  
export const  Review = ({image}) => {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button>Preview</Button>
      </DialogTrigger>
      <DialogContent >
        {
          image&&
          <img src={URL.createObjectURL(image)} alt="PreviewImage"/>
        }
      </DialogContent>
    </Dialog>
  )
}

