
function ContactToggle({onOpenModal}) {
  return (
    <div className="fixed top-50 -right-10 z-50 w-30 h-10 bg-red-400 rounded-tl-[10px]  rounded-tr-[10px] bg-gradient-to-b from-[#dd0dce] to-[var(--primary-color)] hover:scale-105 cursor-pointer ease-in-out duration-300 p-2 transform -rotate-90" onClick={onOpenModal}>
      <h3 className="text-center"> Get A Quote!</h3> 
    
    
    </div>
  )
}

export default ContactToggle