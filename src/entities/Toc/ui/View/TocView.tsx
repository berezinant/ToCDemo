import { JSX, useState } from 'react';
import { TocRow } from '../Row';

export function TocView(): JSX.Element {
  const [expandedNodes, setIsExpanded] = useState<Record<string, boolean>>({ Two: true });

  const toggleNode = (title: any) => {
    setIsExpanded({
      ...expandedNodes,
      [title]: !expandedNodes[title],
    });
  };

  const content: any = [
    { title: 'One' },
    {
      title: 'Too long title for the second item so it should be wrapped',
      children: [
        { title: 'Two One' },
        { title: 'Two Two' },
        {
          title: 'Two Three',
          children: [
            { title: 'Two Three One' },
            { title: 'Two Three Two' },
            {
              title: 'Two Three Three',
              children: [
                { title: 'Two Three Three One' },
                { title: 'Two Three Three Two' },
                { title: 'Two Three Three Three' },
              ],
            },
          ],
        },
        { title: 'Two Four' },
        { title: 'Two Five' },
        { title: 'Two Six' },
        { title: 'Two Seven' },
      ],
    },
    { title: 'Three' },
    { title: 'Four' },
    { title: 'Five' },
    { title: 'Six' },
    { title: 'Seven' },
    { title: 'Eight' },
  ];
  return (
    <div>
      {content.map((item: any) => (
        <TocRow
          key={item.title}
          title={item.title}
          isExpanded={expandedNodes[item.title]}
          onClick={() => toggleNode(item.title)}
          indent={0}
        >
          {item.children &&
            item.children.map((child: any) => (
              <TocRow
                key={child.title}
                title={child.title}
                isActive={child.title === 'Two Three'}
                isExpanded={expandedNodes[child.title]}
                onClick={() => toggleNode(child.title)}
                indent={1}
              >
                {child.children &&
                  child.children.map((grandChild: any) => (
                    <TocRow
                      key={grandChild.title}
                      title={grandChild.title}
                      isExpanded={expandedNodes[grandChild.title]}
                      onClick={() => toggleNode(grandChild.title)}
                      indent={2}
                    >
                      {grandChild.children &&
                        grandChild.children.map((greatGrandChild: any) => (
                          <TocRow
                            key={greatGrandChild.title}
                            title={greatGrandChild.title}
                            isExpanded={expandedNodes[greatGrandChild.title]}
                            onClick={() => toggleNode(greatGrandChild.title)}
                            indent={3}
                          />
                        ))}
                    </TocRow>
                  ))}
              </TocRow>
            ))}
        </TocRow>
      ))}
    </div>
  );
}
