import * as React from 'react';

interface WorksTPLProps {
  title: string;
  abstract: string;
  motive: string;
  purpose: string;
  myRole: string;
  award: string;
}

function WorksTPL(props: WorksTPLProps) {
  const { title, abstract, motive, purpose, myRole, award } = props;

  return (
    <div>
    </div>
  );
}

export default WorksTPL;