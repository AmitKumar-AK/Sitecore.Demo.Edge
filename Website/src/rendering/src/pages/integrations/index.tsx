import Section, { SectionProps } from 'components/PageContent/Section';
import NonSitecorePageLayout from 'src/layouts/NonSitecorePageLayout';
import sectionJsonContent from '../../staticData/sectionComponents.Data.Integrations.Page.json';

const Integrations = (): JSX.Element => {
  return (
    <>
    </>
  );
};

Integrations.getLayout = function getLayout() {
  const sectionData = {
    fields:sectionJsonContent
  } as unknown as SectionProps;

  return (
    <NonSitecorePageLayout
    title="Integrations"
  >
    <Section {...sectionData}/>
    
  </NonSitecorePageLayout>    
  );
};

export default Integrations;