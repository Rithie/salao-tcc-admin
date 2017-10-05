export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'funcionario',
        data: {
          menu: {
            title: 'general.menu.funcionarios',
            icon: 'ion-person-add',
            selected: false,
            expanded: false,
            order: 250,
          },
        },
        children: [
          {
            path: 'cadastro',
            data: {
              menu: {
                title: 'general.menu.cadastro',
              },
            },
          },
          {
            path: 'listar',
            data: {
              menu: {
                title: 'general.menu.listar',
              },
            },
          },
        ],
      },
      {
        path: 'categoria',
        data: {
          menu: {
            title: 'general.menu.categoria',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          },
        },
        children: [
          {
            path: 'cadastro',
            data: {
              menu: {
                title: 'general.menu.cadastro',
              },
            },
          },
          {
            path: 'listar',
            data: {
              menu: {
                title: 'general.menu.listar',
              },
            },
          },
        ],
      },
      {
        path: 'servico',
        data: {
          menu: {
            title: 'general.menu.servico',
            icon: 'ion-pricetags',
            selected: false,
            expanded: false,
            order: 250,
          },
        },
        children: [
          {
            path: 'cadastro',
            data: {
              menu: {
                title: 'general.menu.cadastro',
              },
            },
          },
          {
            path: 'listar',
            data: {
              menu: {
                title: 'general.menu.listar',
              },
            },
          },
        ],
      },
      {
        path: 'promocao',
        data: {
          menu: {
            title: 'general.menu.promocao',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          },
        },
        children: [
          {
            path: 'cadastro',
            data: {
              menu: {
                title: 'general.menu.cadastro',
              },
            },
          },
          {
            path: 'listar',
            data: {
              menu: {
                title: 'general.menu.listar',
              },
            },
          },
        ],
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register'
              }
            }
          }
        ]
      },
    ]
  }
];
