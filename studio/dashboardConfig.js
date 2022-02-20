export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62125a59fbd1b8f059e91a04',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yhot9yro',
                  apiId: 'c219f490-2099-4e87-a85a-e836c96a4280'
                },
                {
                  buildHookId: '62125a5979d4b4de5716b3fb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1knjqt92',
                  apiId: '7ba602f8-bc58-4d23-bc48-31d40ea20fbe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jedidrew50/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1knjqt92.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
