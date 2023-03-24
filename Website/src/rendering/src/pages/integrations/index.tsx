import Section, { SectionProps } from 'components/PageContent/Section';
import NonSitecorePageLayout from 'src/layouts/NonSitecorePageLayout';
import sectionJsonContent from '../../staticData/sectionComponents.Data.Integrations.Page.json';
import {  getSpeakers } from '../../api/queries/getSpeakers'
import ContentList from 'components/Common/ContentList';

export const getStaticProps = async () => {
  const { speakers } = await getSpeakers("{1F4B781B-F2A5-5647-99DF-C0C369162C4D}","en");
  return {
    props: {
      speakerData: speakers
    },
    revalidate: 10,
  };
};

const Integrations = (): JSX.Element => {
  return (
    <>
    </>
  );
};

Integrations.getLayout = function getLayout(page:any) {
  const sectionData = {
    fields:sectionJsonContent
  } as unknown as SectionProps;

  const speakers =
  page?.props?.speakerData?.data?.item?.children?.results && page?.props?.speakerData?.data?.item?.children?.results?.length > 0 ? (
      <ContentList {...page?.props?.speakerData} />
    ) : (
      <div>No speakers</div>
    );  


  return (
    <NonSitecorePageLayout
    title="Integrations"
  >
    <Section {...sectionData}/>
    {speakers}
    
  </NonSitecorePageLayout>    
  );
};

export default Integrations;

