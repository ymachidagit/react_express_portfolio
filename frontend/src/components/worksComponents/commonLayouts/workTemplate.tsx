import {Accordion} from './accordion'

export type workType = {
  title: string,
  abstract: string,
  motive: string,
  purpose: string,
  techStack: string,
  myRole: string,
  award: string,
  path: string,
  imgPath: string
}

export const WorkTitle = ({work}: {work: workType}) => {
  return(
    <div className="flex flex-wrap w-full mb-3">
      <div className="inline mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{work.title}</h1>
        <div className="h-1 w-full bg-indigo-500 rounded"></div>
      </div>
    </div>
  )
}

export const WorkMotive = ({work}: {work: workType})  => {
  return(
    <Accordion content={{
      text: '開発の経緯',
      content: work.motive
    }}/>
    
  )
}

export const WorkAbstract = ({work}: {work: workType})  => {
  return(
    <Accordion content={{
      text: '概要',
      content: work.abstract
    }}/>
  )
}

export const WorkPurpose = ({work}: {work: workType})  => {
  return(
    <Accordion content={{
      text: '目的',
      content: work.purpose
    }}/>
  )
}

export const WorkTeckStack = ({work}: {work: workType})  => {
  return(
    <Accordion content={{
      text: '技術スタック',
      content: work.techStack
    }}/>
  )
}

export const WorkMyRole = ({work}: {work: workType}) => {
  return(
    <Accordion content={{
      text: '自分の役割',
      content: work.myRole
    }}/>
  )
}

export const WorkAward = ({work}: {work: workType})  => {
  return(
    <Accordion content={{
      text: '賞',
      content: work.award
    }}/>
  )
}