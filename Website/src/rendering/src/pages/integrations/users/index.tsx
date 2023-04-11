import Section, { SectionProps } from 'components/PageContent/Section';
import Link from 'next/link';
import {  useEffect, useState } from 'react';
import NonSitecorePageLayout from 'src/layouts/NonSitecorePageLayout';
import sectionJsonContent from '../../../staticData/sectionComponents.Data.Users.Page.json';
import Image from 'next/image';

const renderUser = ( users:any ) => {
  return (
      <>
         <div className="featured-speakers item-grid" style={{
          paddingLeft: 110,
          }}>
            <div className="grid-content">
              {users && users.length>0 && users.map((item:any, index:any) => (
                    <Link key={index} href={"/integrations/users/" + item.id} passHref>
                    <a>
                      <div className="grid-item">
                        <div className="item-image">
                          <Image
                            src={item?.picture}
                            width={265}
                            height={265}
                            alt={item?.firstName}
                            title={item?.firstName}
                          />                           
                        </div>
                        <div className="item-details">
                          <p className="item-title">
                           {item?.title + ' ' + item?.firstName + ' ' + item?.lastName}
                          </p>
                        </div>                        
                      </div>
                    </a>
                    </Link>

              ))}
              </div>
          </div>
      </>
  );
}

const Users = (): JSX.Element => {
  return (
    <>
    </>
  );
};

Users.getLayout = function getLayout() {
  const [data, setData] = useState(null)
  const [proxydata, setProxyData] = useState(null)

  useEffect(() => {
    fetch('/api/userdata/user?limit=10',{
      headers: {
        "content-type": "application/json",
        "app-id": "64257e4727f0428978913c23",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  useEffect(() => {
    fetch('/api/proxy/users',{
      headers: {
        "content-type": "application/json",
        "app-id": "64257e4727f0428978913c23",
      },
    })
      .then((res) => res.json())
      .then((proxydata) => {
        setProxyData(proxydata)
      })
  }, [])
  
  const sectionData = {
    fields:sectionJsonContent
  } as unknown as SectionProps;
  return (
    <NonSitecorePageLayout
    title="Integrations | Users"
  >
    <Section {...sectionData}/>
    <div><strong>Use of NextJS Config Rewrites</strong></div>
    { renderUser(data?.data)}
    <div><strong>Use of Proxy Route</strong></div>
    { renderUser(proxydata?.data?.data)}
  </NonSitecorePageLayout>    
  );
};

export default Users;


