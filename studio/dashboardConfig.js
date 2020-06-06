export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edb8d7522763e682da03a8f',
                  title: 'Sanity Studio',
                  name: 'Application1-studio',
                  apiId: '7b00fd6f-8396-4c12-b410-6f4d51c6bf15'
                },
                {
                  buildHookId: '5edb8d7505042bbd618e1a98',
                  title: 'Landing pages Website',
                  name: 'Application1',
                  apiId: '070cc678-4195-430f-9681-268c8bc34e05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tchiagoneses/Application1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Application1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
