import { Icons } from '@/components/icons';

export const INSRRT_MENU_ITEMS = [
  {
    label: 'Insert',
    items: [
      {
        value: 'title',
        label: 'Title',
        description:
          'This AI tool will help you generate a blog post title based on your chosen topic. All you need to do is enter your topic and the AI will come up with a title for you.',
        icon: Icons.pen,
      },
      {
        value: 'introduction',
        label: 'Introduction',
        description:
          'AI will generate an introduction to your post based on the post topic and post title. This will help you to create a more meaningful and interesting post.',
        icon: Icons.pen,
      },
      {
        value: 'outline',
        label: 'Outline',
        description:
          'AI will generate an outline for your blog post based on your topic, allowing you to spend less time planning and more time writing.',
        icon: Icons.pen,
      },
      {
        value: 'completion',
        label: 'Completion',
        description:
          'Completion is the process in which the AI will write the rest of the text according to the given title or text. This is done by analyzing the text and finding the best possible continuation of it.',
        icon: Icons.pen,
      },
    ],
  },
];
