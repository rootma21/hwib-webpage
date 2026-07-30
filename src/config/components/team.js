// Configuration for the leadership team component / page
const exec = {
  // Whether the leadership team page is enabled or not
  enabled: true,

  // The title of the leadership team section
  title: 'Our Executive Team',

  // The subtitle of the leadership team section
  description: 'Meet the organizers behind this organization',

  // Members of the leadership team
  members: [
    {
      name: 'Rachel Utama',
    },
    {
      name: 'Sruthi Srinivasan',
    },
    {
      name: 'Sharanya Sen',
    },
  ],
};

const team = {
  // Whether the leadership team page is enabled or not
  enabled: true,

  // The title of the leadership team section
  title: 'Our Committee Members',

  // The subtitle of the leadership team section
  description: 'Meet the team members who bring vision, creativity, and care to our committees',

  // Members of the leadership team
  members: [
    // TODO: add HWIB committee members here
  ],
};

export default team;

// ✅ Named export for exec
export { exec };
