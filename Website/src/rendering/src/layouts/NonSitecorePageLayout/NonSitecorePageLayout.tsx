import Footer, { FooterProps } from "components/Navigation/Footer"
import MainNavigation, { MainNavigationProps } from "components/Navigation/MainNavigation"
import Head from "next/head"
import React, { FC } from "react"


type PageLayoutProps = {
  title?: string
}

export const NonSitecorePageLayout: FC<PageLayoutProps> = (props): JSX.Element => {
  const footerProps = {
    fields: {
      data: {
        item: {
          footerLogo: {},
        },
        links: {
          displayName: 'Footer',
          children: {
            results: [
              {
                displayName: 'Follow Us',
                children: {
                  results: [
                    {
                      displayName: 'Facebook',
                      icon: { value: 'faFacebookF' },
                      title: { value: '' },
                      field: {
                        jsonValue: { value: { href: '' } },
                      },
                    },
                    {
                      displayName: 'Youtube',
                      icon: { value: 'faYoutube' },
                      title: { value: '' },
                      field: {
                        jsonValue: { value: { href: '' } },
                      },
                    },
                    {
                      displayName: 'Twitter',
                      icon: { value: 'faTwitter' },
                      title: { value: '' },
                      field: {
                        jsonValue: { value: { href: '' } },
                      },
                    },
                    {
                      displayName: 'Instagram',
                      icon: { value: 'faInstagram' },
                      title: { value: '' },
                      field: {
                        jsonValue: { value: { href: '' } },
                      },
                    },
                    {
                      displayName: 'Linkedin',
                      icon: { value: 'faLinkedin' },
                      title: { value: '' },
                      field: {
                        jsonValue: { value: { href: '' } },
                      },
                    },
                  ],
                },
              },
              {
                displayName: 'PLAY! Summit',
                children: {
                  results: [
                    {
                      displayName: 'Home',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            href: '/en',
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            target: '',
                            querystring: '',
                            id: '{68DC89A4-1B04-59A8-9C4E-3B49D6C61052}',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'Sessions',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            href: '/en/sessions',
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            target: '',
                            querystring: '',
                            id: '{68DC89A4-1B04-59A8-9C4E-3B49D6C61052}',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'Speakers',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            href: '/en/speakers',
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            target: '',
                            querystring: '',
                            id: '{1F4B781B-F2A5-5647-99DF-C0C369162C4D}',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'Vendors',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            href: '/en/vendors',
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            target: '',
                            querystring: '',
                            id: '{774E44E8-0F30-5879-B847-AD233FFB41AA}',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'Sponsors',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            href: '/en/sponsors',
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            target: '',
                            querystring: '',
                            id: '{66C99E47-7BBF-52D1-B1D7-4662B850744A}',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'About Us',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            href: '/en/about-us',
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            target: '',
                            querystring: '',
                            id: '{2717574C-48A0-5469-85A8-A332DF71F1E4}',
                          },
                        },
                      },
                    },
                    {
                      displayName: 'News',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: {
                          value: {
                            href: '/en/news',
                            text: '',
                            anchor: '',
                            linktype: 'internal',
                            class: '',
                            title: '',
                            target: '',
                            querystring: '',
                            id: '{0E4A63DA-7496-557E-BF80-5BD52255E431}',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                displayName: 'Join Us',
                children: {
                  results: [
                    {
                      displayName: 'Book Tickets',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: { value: { href: '' } },
                      },
                    },
                    {
                      displayName: 'Become a Sponsor',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: { value: { href: '' } },
                      },
                    },
                    {
                      displayName: 'Become a Vendor',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: { value: { href: '' } },
                      },
                    },
                  ],
                },
              },
              {
                displayName: 'Get Support',
                children: {
                  results: [
                    {
                      displayName: 'FAQ',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: { value: { href: '' } },
                      },
                    },
                    {
                      displayName: 'Tech Support',
                      icon: { value: '' },
                      title: { value: '' },
                      field: {
                        jsonValue: { value: { href: '' } },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  } as unknown as FooterProps;

  const mainNavProps = {
    fields: {
      data: {
        item: {
          id: '4790380A3F0C443AA954269ECB2D5566',
          path: '/sitecore/content/EdgeWebsite/Data/Config',          
          headerLogo: {
            jsonValue: {
              value: {
              mediaid:'',
              thumbnailsrc: 'https://playsummit.sitecoresandbox.cloud/api/gateway/30940/thumbnail',
              src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/83a458a1cb54401cab2308488bbd1031?v=bdb6447b&t=web',
              alt: 'PLAY! Summit logo - stacked light grey',
              height: '113',
              width: '274'
            }              
            },
            alt: 'PLAY! Summit logo - stacked light grey'
          },
        },
        links: {
          displayName: 'Main Navigation',
          children: {
            results: [
              {
                displayName: 'Sessions',
                field: {
                  jsonValue: {
                    value: {
                      href: '/sessions',
                      class: '',
                      id: '{68DC89A4-1B04-59A8-9C4E-3B49D6C61052}',
                      querystring: '',
                      anchor: '',
                      target: '',
                      title: '',
                      linktype: 'internal',
                      text: ''
                    }
                  }
                }
              },
              {
                displayName: 'Speakers',
                field: {
                  jsonValue: {
                    value: {
                      href: '/speakers',
                      class: '',
                      id: '{1F4B781B-F2A5-5647-99DF-C0C369162C4D}',
                      querystring: '',
                      anchor: '',
                      target: '',
                      title: '',
                      linktype: 'internal',
                      text: ''
                    }
                  }
                }
              },
              {
                displayName: 'Vendors',
                field: {
                  jsonValue: {
                    value: {
                      href: '/vendors',
                      class: '',
                      id: '{774E44E8-0F30-5879-B847-AD233FFB41AA}',
                      querystring: '',
                      anchor: '',
                      target: '',
                      title: '',
                      linktype: 'internal',
                      text: ''
                    }
                  }
                }
              },
              {
                displayName: 'Sponsors',
                field: {
                  jsonValue: {
                    value: {
                      href: '/sponsors',
                      class: '',
                      id: '{66C99E47-7BBF-52D1-B1D7-4662B850744A}',
                      querystring: '',
                      anchor: '',
                      target: '',
                      title: '',
                      linktype: 'internal',
                      text: ''
                    }
                  }
                }
              },
              {
                displayName: 'About Us',
                field: {
                  jsonValue: {
                    value: {
                      href: '/about-us',
                      class: '',
                      id: '{2717574C-48A0-5469-85A8-A332DF71F1E4}',
                      querystring: '',
                      anchor: '',
                      target: '',
                      title: '',
                      linktype: 'internal',
                      text: ''
                    }
                  }
                }
              },
              {
                displayName: 'Integrations',
                field: {
                  jsonValue: {
                    value: {
                      href: '/integrations',
                      class: '',
                      id: '',
                      querystring: '',
                      anchor: '',
                      target: '',
                      title: '',
                      linktype: 'external',
                      text: ''
                    }
                  }
                }
              }              
            ]
          }
        },
      },
    },
  } as unknown as MainNavigationProps;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{props.title || "Play! Summit"}</title>
      </Head>
      <header>
        <MainNavigation {...mainNavProps}/>
      </header>      
        {props.children}
      <footer>
        <Footer {...footerProps} />
      </footer>
    </>
  )
}
