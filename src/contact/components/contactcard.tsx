import { contacts } from '../../assets/others/container.js'


function Contactcard () {

  return (
    <>
    <h1 className='text-2xl font-bold uppercase mx-7'>Get in touch with us</h1>
    <div className='flex flex-col h-screen'>
      {contacts.map((card, index) => {
        return(
          <div className='shadow-[0_0_10px_rgba(0,0,0,0.6)] flex flex-col flex-1 items-center m-7 pt-10 text-center text-xl' key={index}>
            <img className='w-15 h-15' src={card.icon} alt="icon" />
            <p className='font-medium'>{card.title}</p>
            <p>{card.content}</p>
          </div>
        )})
      }
    </div>
    </>
  )
}

export default Contactcard;
