/**
 * hearth.ts
 *
 * Apps registered on HEARTH (Hub for Exploratory Analysis, Resource-sharing, Testing, and
 * Hypothesis-generation), EMBER's portal for tools that prepare and refine data for the archive.
 * See https://www.hearth.emberarchive.org
 */
export interface HearthApp {
  name: string;
  description: string;
  uri: string;
  logo: string;
}

export const hearthApps: HearthApp[] = [
  {
    name: 'Upload',
    description: 'Upload data files for the HEARTH data ecosystem.',
    uri: 'https://upload.brain-bbqs.org',
    logo: '/hearth/upload-logo.svg',
  },
  {
    name: 'Clip Extractor',
    description: 'Trim and describe a portion of a video.',
    uri: 'https://clip-extractor.brain-bbqs.org',
    logo: '/hearth/clip-extractor-logo.svg',
  },
  {
    name: 'Encoding Helper',
    description: 'Inspect and tune video encodings.',
    uri: 'https://encoding-helper.brain-bbqs.org',
    logo: '/hearth/encoding-helper-logo.svg',
  },
];
