import {Accordion as FlowbiteAccordion } from 'flowbite-react';

type contentType = {
  text: string,
  content: string
}

export const Accordion = ({content}:{content:contentType}) => {
  return (
    <FlowbiteAccordion alwaysOpen={true}>
      <FlowbiteAccordion.Panel>
        <FlowbiteAccordion.Title className="bg-green-300 hover:bg-green-100 sm:text-xl text-xm font-medium title-font cursor-pointer pr-3">
          {content.text}
        </FlowbiteAccordion.Title>
        <FlowbiteAccordion.Content>
          <p className="mb-2 text-gray-900">
            {content.content}
          </p>
        </FlowbiteAccordion.Content>
      </FlowbiteAccordion.Panel>
    </FlowbiteAccordion>
  );
}