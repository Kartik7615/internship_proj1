"use client"

import { deleteIdCardAction } from "@/app/actions/idcard"

export default function DeleteButton({ id }: { id: string }) {
  return (
    <form action={deleteIdCardAction}>
      <input type="hidden" name="id" value={id} />
      <button 
        type="submit" 
        className="btn-delete" 
        onClick={(e) => { 
          if (!window.confirm('Are you sure you want to delete this record?')) {
            e.preventDefault() 
          }
        }}
      >
        Del
      </button>
    </form>
  )
}