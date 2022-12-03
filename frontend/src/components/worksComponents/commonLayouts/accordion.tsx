type contentType = {
  id: string,
  text: string,
  content: string
}

export const Accordion = ({content}:{content:contentType}) => {
  return(
    <div className="tab w-full overflow-hidden border-t">
      <input className="absolute opacity-0 " id={content.id} type="checkbox" name="tabs"/>
      <label className="sm:text-xl text-xm font-medium title-font block  leading-normal cursor-pointer pr-3" htmlFor={content.id}>{content.text}</label>
      <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal mb-5">
        <p className="p-5">{content.content}</p>
      </div>
    </div>
  )
}