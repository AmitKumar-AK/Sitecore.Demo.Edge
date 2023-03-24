import Section, { SectionProps } from 'components/PageContent/Section';
import NonSitecorePageLayout from 'src/layouts/NonSitecorePageLayout';
import sectionJsonContent from '../../../staticData/sectionComponents.Data.Users.Page.json';


const Users = (): JSX.Element => {
  return (
    <>

    </>
  );
};

Users.getLayout = function getLayout() {
  const sectionData = {
    fields:sectionJsonContent
  } as unknown as SectionProps;

  return (
    <NonSitecorePageLayout
    title="Integrations | Users"
  >
    <Section {...sectionData}/>
  </NonSitecorePageLayout>    
  );
};

export default Users;
