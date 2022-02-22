import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'oluptatem accusantium doloremque laudantium, totam rem aperiam.',
  'Sed ut perspiciatis unde omnis iste natus error sit',
  'Cunde omnis iste natus error sit voluptatem accusantium.',  
  'Sed ut perspiciatis unde omnis iste natus error sit',
  'Cunde omnis iste natus error sit voluptatem accusantium.',
  'Ted ut perspiciatis unde omnis isteeriam.',
  'Red ut perspiciatis unde omnis iste natus error sit vaperiam.',,
  'Ted ut perspiciatis unde omnis iste natuperiam.',
  'Red ut perspiciatis undem aperiam.',
  'oluptatem accusantium doloremque laudantium, totam rem aperiam.',
  'oluptatem accusantium doloremque laudantium, totam rem aperiam.',
  'The American Dream retold through mid-century railroad graphics',
  'Sed ut perspiciatis unde omnis iste natus error sit',
  'Cunde omnis iste natus error sit voluptatem accusantium.',
  'ed ut perspiciatis unde omnis iste natus erroriam.',
  'Ted ut perspiciatis unde omnis iste natus error sit volupam.',
  'Red ut perspiciatis unde omnis iste natus error sit voluptatem.',
  '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  'oluptatem accusantium doloremque laudantium, totam rem aperiam.',
  'oluptatem accusantium doloremque laudantium, totam rem aperiam.',
  'The American Dream retold through mid-century railroad graphics',
  'Sed ut perspiciatis unde omnis iste natus error sit',
  'Cunde omnis iste natus error sit voluptatem accusantium.',
  'Sed ut perspiciatis unde omnis iste natus error sit',
  'Cunde omnis iste natus error sit voluptatem accusantium.'
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: POST_TITLES[index + 1],
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName()
   
  }
}));

export default posts;
